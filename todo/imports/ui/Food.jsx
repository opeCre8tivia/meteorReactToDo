import React from 'react'
import {useTracker} from 'meteor/react-meteor-data'
import { FoodCollection } from '../api/Food'

//Consuming data from collectio

export const Food =()=>{

    const foodItem = useTracker(()=>{
        return FoodCollection.find({}).fetch()
    })
   
   


    return(

        <div>
            <h6>FOOD AND PRICES</h6>
            {foodItem[0] === undefined? "" : foodItem.map((item)=><div> {item.name}</div>) } 


            
        </div>
    )
}