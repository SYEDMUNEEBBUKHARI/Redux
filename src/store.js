import {createStore}  from "redux";
import ApiDataReducer from "./Reducers";

const store=createStore(ApiDataReducer);

export default store;

