import React, { useState } from "react";

const ClienteInfo = ({ cliente }) => {
    const [info, setInfo] = useState({
        nombre: cliente?.id ? cliente.nombre : "",
        domic:
            cliente?.id && cliente.domicilio && cliente.domicilio_nro
                ? `${cliente.domicilio} - ${cliente.domicilio_nro}`
                : "",
        localidad: cliente?.id && cliente.localidad ? cliente.localidad : "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    return (
        <div className="col-12 bb">
            <div style={{ marginTop: 15 }}>
                Señor/es:
                <input
                    type="text"
                    value={info.nombre}
                    name="nombre"
                    onChange={handleChange}
                    style={{
                        width: "85%",
                        marginLeft: 15,
                        border: "unset",
                        borderBottom: "1px dashed black",
                    }}
                />
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                Domicilio:
                <input
                    type="text"
                    value={info.domic}
                    name="domic"
                    onChange={handleChange}
                    style={{
                        width: "45%",
                        margin: "0 15px",
                        border: "unset",
                        borderBottom: "1px dashed black",
                    }}
                />
                Loc:
                <input
                    type="text"
                    value={info.localidad}
                    name="localidad"
                    onChange={handleChange}
                    style={{
                        width: "30%",
                        margin: "0 15px",
                        marginRight: 0,
                        border: "unset",
                        borderBottom: "1px dashed black",
                    }}
                />
            </div>
        </div>
    );
};

export default ClienteInfo;
