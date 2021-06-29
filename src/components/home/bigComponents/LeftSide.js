import React from "react";
import Productos from "../Productos";
import GroupButton from "./SmallComponentsGroup/GroupButton";

function LeftSide() {
    return (
        <div>
            <GroupButton />
            <Productos />
        </div>
    );
}

export default LeftSide;
