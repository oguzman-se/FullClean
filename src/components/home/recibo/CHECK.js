import React, { useEffect, useState } from "react";

const CHECK = ({ checked, id, arrChecked, setArrChecked }) => {
    const [check, setCheck] = useState(checked);

    const handleCheck = () => {
        arrChecked.forEach((c) => c.toFalse());
        setCheck(!check);
    };

    useEffect(() => {
        console.log("tenemos este arrChecked", arrChecked);
        if (arrChecked.length > 0) {
            let that = true;

            arrChecked.forEach((c) => {
                if (c.id === id) {
                    that = false;
                }
            });

            if (that) {
                setArrChecked([
                    ...arrChecked,
                    {
                        toFalse: () => setCheck(false),
                        id: id,
                    },
                ]);
            }
        } else {
            setArrChecked([{ toFalse: () => setCheck(false), id: id }]);
        }
    }, [arrChecked]);

    if (check) {
        return (
            <>
                <div
                    onClick={handleCheck}
                    style={{ cursor: "pointer", position: "relative" }}
                >
                    <i
                        className="bi bi-check"
                        style={{
                            position: "absolute",
                            marginRight: "auto",
                            marginLeft: "auto",
                            right: 0,
                            left: "-3px",
                            fontSize: "20px",
                            top: "-7px",
                        }}
                    ></i>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div onClick={handleCheck} style={{ cursor: "pointer" }}></div>
            </>
        );
    }
};

export default CHECK;
