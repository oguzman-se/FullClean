import React from 'react'
import Productos from '../Productos'
import GroupButton from './SmallComponentsGroup/GroupButton';

function LeftSide(){
    return(
        <div>
            <div>
                <div>
                    <GroupButton/>
                </div>
            </div>
            
            <div>
                <div>
                    <Productos/>          
                </div>
            </div>
        </div>
    )
}

export default LeftSide;














