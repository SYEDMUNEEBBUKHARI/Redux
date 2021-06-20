
import {BUG_ADDED,BUG_REMOVED} from "./actionTypes";

export default function reducer(state = [], action){

    let lastId=0;
    if(action.type === BUG_ADDED)
    {
        console.log("pressed");
    return [
        ...state,
        {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }
    ];
}
    else if(action.type === BUG_REMOVED)
    return state.filter(bug => bug.id !== action.payload.id);


   return state; 
}