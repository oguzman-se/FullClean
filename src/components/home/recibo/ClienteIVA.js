import React, { useState } from "react";
import CHECK from "./CHECK";

const ClienteIVA = ({ cliente }) => {
    const [arrIVA, setArrIVA] = useState([]);
    const [arrCTA, setArrCTA] = useState([]);
    const [info, setInfo] = useState({
        cuit: cliente?.id ? cliente.cuit : "",
        remito: "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="row bb">
                <div
                    className="col-1 br"
                    style={{ height: 50, paddingTop: 15, paddingLeft: 50 }}
                >
                    IVA
                </div>
                <div
                    className="col-6 br"
                    style={{
                        textAlign: "center",
                        fontSize: 13,
                        height: 50,
                        paddingTop: 15,
                    }}
                >
                    <div className="withCuadrado">
                        RESP.ISNC.
                        <CHECK
                            id="RI"
                            arrChecked={arrIVA}
                            setArrChecked={setArrIVA}
                            checked={
                                cliente?.id &&
                                cliente?.cond_iva === "resp_inscrip"
                            }
                        />
                    </div>
                    <div className="withCuadrado">
                        RESP. MONOT.
                        <CHECK
                            id="RM"
                            arrChecked={arrIVA}
                            setArrChecked={setArrIVA}
                            checked={
                                cliente?.id && cliente?.cond_iva === "resp_mono"
                            }
                        />
                    </div>
                    <div className="withCuadrado">
                        NO RESP
                        <CHECK
                            id="NR"
                            arrChecked={arrIVA}
                            setArrChecked={setArrIVA}
                            checked={
                                cliente?.id && cliente?.cond_iva === "no_resp"
                            }
                        />
                    </div>
                    <div className="withCuadrado">
                        EXENTO
                        <CHECK
                            id="EX"
                            arrChecked={arrIVA}
                            setArrChecked={setArrIVA}
                            checked={
                                cliente?.id && cliente?.cond_iva === "exento"
                            }
                        />
                    </div>
                    <div className="withCuadrado">
                        CONS FINAL
                        <CHECK
                            id="CS"
                            arrChecked={arrIVA}
                            setArrChecked={setArrIVA}
                            checked={
                                cliente?.id &&
                                cliente?.cond_iva === "cons_final"
                            }
                        />
                    </div>
                </div>
                <div className="col-5" style={{ height: 50, paddingTop: 20 }}>
                    C.U.I.T.:
                    <input
                        type="text"
                        value={info.cuit}
                        name="cuit"
                        onChange={handleChange}
                        style={{
                            width: "65%",
                            margin: "0 15px",
                            marginRight: 0,
                            border: "unset",
                            borderBottom: "1px dashed black",
                        }}
                    />
                </div>
            </div>
            <div className="row bb">
                <div
                    className="col-7 br"
                    style={{ height: 40, paddingTop: 12,paddingLeft: 50 }}
                >
                    Condición de Venta:
                    <div className="withCuadrado" style={{ marginLeft: 10 }}>
                        Contado
                        <CHECK
                            id="CT"
                            arrChecked={arrCTA}
                            setArrChecked={setArrCTA}
                        />
                    </div>
                    <div className="withCuadrado">
                        Cta. Cte.
                        <CHECK
                            id="CC"
                            arrChecked={arrCTA}
                            setArrChecked={setArrCTA}
                        />
                    </div>
                </div>
                <div className="col-5" style={{ height: 40, paddingTop: 10 }}>
                    Remito / s N° :
                    <input
                        type="text"
                        value={info.remito}
                        name="remito"
                        onChange={handleChange}
                        style={{
                            width: "47%",
                            margin: "0 15px",
                            marginRight: 0,
                            border: "unset",
                            borderBottom: "1px dashed black",
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default ClienteIVA;
