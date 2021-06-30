
import {DATA_ADDED,FILTER_RECORD} from "../actionTypes";

export default function ApiDataReducer(state = "", action){

    let lastId=0;
    if(action.type === DATA_ADDED)
    {
       
    return [
        ...state,
        {
            data: action.payload.data,
        }
    ];
}
    else if(action.type === FILTER_RECORD)
    {
       
           
    }
    



   return state; 
}