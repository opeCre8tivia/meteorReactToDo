import React from 'react'

import {boyNames} from '../api/boyNames'

export const Names=()=>{

    //use names collection 
    let _data =boyNames.find().count()
    

   



    return (
        <div>
            <h6>NAMES OF BOYS</h6>
            {_data ? <p>{_data}</p> : null}

        </div>
    )
}

