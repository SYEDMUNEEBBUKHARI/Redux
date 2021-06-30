
import {FILTER_DATA_ADDED} from "../actionTypes";

export default function Filterdata(state = "", action){

    if(action.type === FILTER_DATA_ADDED)
    {
       
    return [...state, {Filterdata: action.payload.Filterdata }]
}
   

   return state; 
}