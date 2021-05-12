import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../../config/clienteAxios";
import { useHome } from "../../context/home-context";

const SelectCategoria = ({ cats, currentProducto, setCurrentProducto }) => {
    let { addToast } = useToasts();
    const { SetAllCategorias } = useHome();
    const [newCateg, setNewCateg] = useState("");
    const [options, setOptions] = useState(() => {
        let arr = [];
        if (cats.length > 0) {
            cats.map((c) => arr.push({ value: c.id, label: c.nombre }));
        }
        return arr;
    });

    const handleChange = (newValue, actionMeta) => {
        //console.group("Value Changed");
        //console.log(newValue);
        //console.log(`action: ${actionMeta.action}`);
        //console.groupEnd();
        if (actionMeta.action === "clear") {
            setNewCateg("");
        } else if (actionMeta.action === "select-option") {
            setCurrentProducto({
                ...currentProducto,
                category_id: newValue.value,
            });
        } else if (actionMeta.action === "create-option") {
            const createCat = async () => {
                await clienteAxios
                    .post("/categorias", {
                        nombre: newCateg,
                    })
                    .then((res) => {
                        //console.log(res.data, newCateg);
                        setNewCateg("");
                        const getCats = async () => {
                            await clienteAxios
                                .get("/categorias")
                                .then((r) => {
                                    SetAllCategorias(r.data);
                                    let arr = [];
                                    if (r.data.length > 0) {
                                        r.data.map((c) => {
                                            if (c.nombre === newCateg) {
                                                setCurrentProducto({
                                                    ...currentProducto,
                                                    category_id: c.id,
                                                });
                                            }
                                            return arr.push({
                                                value: c.id,
                                                label: c.nombre,
                                            });
                                        });
                                    }
                                    setOptions(arr);
                                    addToast("Categoria creada", {
                                        appearance: "success",
                                        autoDismiss: true,
                                    });
                                })
                                .catch((r) => {
                                    console.log(
                                        "error trayendo las categorias desp de crear una en el modal de producto",
                                        r
                                    );
                                });
                        };
                        getCats();
                    })
                    .catch((err) => {
                        console.log(
                            "error post de categoria en el modal de producto",
                            err
                        );
                        addToast("No se creo la categoria", {
                            appearance: "error",
                            autoDismiss: true,
                        });
                    });
            };
            createCat();
        }
    };

    const handleInputChange = (inputValue, actionMeta) => {
        //console.group("Input Changed");
        //console.log(inputValue);
        //console.log(`action: ${actionMeta.action}`);
        //console.groupEnd();
        if (actionMeta.action === "input-change") setNewCateg(inputValue);
        else if (actionMeta.action === "input-blur") setNewCateg("");
    };

    return (
        <CreatableSelect
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={options}
            //value={options.filter((option) => option.value === 1)}
            formatCreateLabel={(txt) => `Crear categoria: ${txt}`}
            placeholder={"Elija una categoría para el producto"}
        />
    );
};

export default SelectCategoria;
