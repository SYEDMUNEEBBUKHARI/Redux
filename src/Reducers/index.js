import Filterdata from "./Filterdata";
import ApiDataReducer from "./ApiDataReducer"; 
import Userinput from "./Userinput";
import { combineReducers } from "redux";

const allReducers=combineReducers({Filterdata,ApiDataReducer,Userinput});
export default allReducers;