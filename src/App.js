
import './App.css';
import store from "./store";
import Navbar from "./components/navbar/navbar";
import Mainpage from "./components/mainpage/mainpage";
function App() {
 let myfunc=()=>{
   console.log("pushed",store.getState());
      store.dispatch({
        type: "bugAdded",
        payload:{
        description:"Bug1"
        }
      })
      console.log("pushed2",store.getState());
  }
  return (
    <>
    <Navbar />
    <br></br>
    <Mainpage />
    </>
  );
}

export default App;
