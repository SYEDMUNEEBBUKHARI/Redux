
import {DATA_ADDED,FILTER_RECORD} from "../actionTypes";

export default function ApiDataReducer(state = "", action){

    if(action.type === DATA_ADDED)
    {
       
    return [
        ...state,
        {
            data: action.payload.data,
        }
    ];
}
    
   return state; 
}