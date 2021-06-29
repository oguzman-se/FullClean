import React from "react";
import logo from "../../../assets/image/logo.jpg";

const Cabecera = ({ type }) => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    return (
        <>
            <div className="col-6 br info">
                <label className="col-3">
                    <img
                        alt="logo"
                        src={logo}
                        style={{
                            width: "100px",
                            marginLeft: "-25px",
                            marginTop: "-20px",
                        }}
                    />
                </label>
                <label className="col-9">
                    Full Clean Express
                    <span>VENTA Y DISTRIBUCION DE PRODUCTOS DE LIMPIEZA</span>
                </label>
                <label className="col-12 direc">
                    BERUTI 70 - (1870) AVELLANEDA
                </label>
                <label className="col-12 direc" style={{ top: -10 }}>
                    Buenos Aires - Tel.
                    <i
                        className="bi bi-whatsapp"
                        style={{ margin: "0 5px" }}
                    ></i>{" "}
                    : 11 5017 - 4060
                </label>
                <label className="col-12 redes" style={{ top: -15 }}>
                    <i
                        className="bi bi-envelope"
                        style={{ marginRight: 16 }}
                    ></i>
                    infofullcleanexpress@gmail.com
                </label>
                <label className="col-12 redes" style={{ top: -20 }}>
                    <i
                        className="bi bi-instagram"
                        style={{ marginRight: 8 }}
                    ></i>{" "}
                    @fullcleanexpress
                </label>
                <label className="col-12 redes" style={{ top: -22 }}>
                    <i
                        className="bi bi-facebook"
                        style={{ marginRight: 16 }}
                    ></i>
                    FULL CLEAN EXPRESS
                </label>
            </div>
            <div className="col-6">
                <div className="row">
                    <div
                        className="col-3 br bb"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 38,
                        }}
                    >
                        x
                    </div>
                    <div
                        className="col-9 bb"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 30,
                            marginTop: 5,
                        }}
                    >
                        {type}
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-12"
                        style={{
                            paddingTop: 35,
                        }}
                    >
                        <div
                            style={{
                                border: "1px solid black",
                                width: 200,
                                height: 50,
                                margin: "auto",
                                display: "flex",
                            }}
                        >
                            <div
                                style={{
                                    borderRight: "1px solid black",
                                    width: 75,
                                    height: 49,
                                    margin: "auto",
                                    marginLeft: 0,
                                    fontSize: 25,
                                    paddingLeft: 17,
                                    fontWeight: "bold",
                                    paddingTop: 5,
                                }}
                            >
                                {day.toString().padStart(2, "0")}
                            </div>
                            <div
                                style={{
                                    borderRight: "1px solid black",
                                    width: 75,
                                    height: 49,
                                    margin: "auto",
                                    marginLeft: 0,
                                    fontSize: 25,
                                    paddingLeft: 17,
                                    fontWeight: "bold",
                                    paddingTop: 5,
                                }}
                            >
                                {month.toString().padStart(2, "0")}
                            </div>
                            <div
                                style={{
                                    width: 75,
                                    height: 49,
                                    margin: "auto",
                                    marginLeft: 0,
                                    fontSize: 25,
                                    paddingLeft: 17,
                                    fontWeight: "bold",
                                    paddingTop: 5,
                                }}
                            >
                                {year.toString().substr(2, 3)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabecera;
