// Home.js
import Layout from "../components/home/Layout";
import React, { useEffect } from "react";
import LeftSide from "../components/home/bigComponents/LeftSide";
import RightSide from "../components/home/bigComponents/RightSide";
import { useHome } from "../context/home-context";

function Home() {
    const { cartItems, setShowTable, barcodeRef } = useHome();

    const handleKeyDown = (e) => {
        //console.log("A key was pressed", e.keyCode, e.key);
        if (e.keyCode === 112) {
            //es el 'F1'
            setShowTable(true);
        }

        if (e.keyCode === 27) {
            //es el 'Escape'
            barcodeRef.current.focus();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <LeftSide />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <RightSide cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
