
import {INPUT_ADDED} from "../actionTypes";

export default function Userinput(state = "", action){

    if(action.type === INPUT_ADDED)
    {
       
    return [...state, {inputdata: action.payload.inputdata }]
}
   

   return state; 
}