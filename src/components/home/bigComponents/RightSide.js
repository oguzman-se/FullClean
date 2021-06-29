import React from "react";
import Barcode from "../Barcode";
import Label from "../Label";
import Table from "../Table";
import LabelBottomXL from "../LabelBottomXL";
import LabelBottomSM from "../LabelBottomSM";

function RightSide(props) {
    const { cartItems } = props;
    return (
        <div>
            <Barcode />
            <Label />
            <Table />
            <LabelBottomXL countCartItems={cartItems.length} />
            <LabelBottomSM />
        </div>
    );
}

export default RightSide;
