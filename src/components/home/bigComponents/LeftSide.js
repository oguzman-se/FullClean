import React from 'react'
import Productos from '../Productos'
import GroupButton from './SmallComponentsGroup/GroupButton';

function LeftSide(props){
    const {onAdd, products, setShow, show} = props;
    return(
        <div>
         <GroupButton setShow={setShow} show={show} />
        <div>
            <Productos products={products} onAdd={onAdd}/>          
          </div>
        </div>
    )
}

export default LeftSide;














