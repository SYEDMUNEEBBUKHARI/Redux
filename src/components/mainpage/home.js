import React, { useState, useEffect } from 'react';
import store from "../../store";
import axios from "axios";
import {useSelector} from "react-redux";
function Home() {
    useEffect(async () => {
        dispatchUserdata();
        dispatchUserdata();
      },[]);
      const mystate=useSelector((state)=>state.ApiDataReducer);

      const dispatchUserdata=async ()=>{
        const response= await axios.get('https://randomuser.me/api/');
        console.log("data---0-0",response.data[0]);
 store.dispatch({type:"DATA_ADDED",
 payload:{
     data:response.data,
     filtervalue:response.data[0]
 }});
 console.log(
     "--->",store.getState()
 )
      }
  return (
    <>
  <h3 className="text-center">  Home page API is calling here........ </h3>
Array length is {mystate && mystate.length}

    
    </>
 
  );
}

export default Home;
