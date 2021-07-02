import React, { useEffect, useState } from "react";
const OfflineContext = React.createContext();

export function OfflineProvider(props) {
    const [isDisconnected, setIsDisconnected] = useState(false);

    const handleConnectionChange = () => {
        const condition = navigator.onLine ? "online" : "offline";
        if (condition === "online") {
            const webPing = setInterval(() => {
                fetch("//google.com", {
                    mode: "no-cors",
                })
                    .then(() => {
                        setIsDisconnected(false);
                        return clearInterval(webPing);
                    })
                    .catch(() => setIsDisconnected(true));
            }, 2000);
            return;
        }

        return setIsDisconnected(true);
    };

    useEffect(() => {
        window.addEventListener("online", handleConnectionChange);
        window.addEventListener("offline", handleConnectionChange);
        return () => {
            window.removeEventListener("online", handleConnectionChange);
            window.removeEventListener("offline", handleConnectionChange);
        };
    }, []);

    const value = { isDisconnected };
    return <OfflineContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useOffline() {
    const context = React.useContext(OfflineContext);
    if (!context) {
        throw new Error("Something wrong had happended");
    }
    return context;
}
