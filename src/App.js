import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import store from "./store";
import Navbar from "./components/navbar/navbar";
import Home from "./components/mainpage/home";
import Page from "./components/page/page";
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
    <Router>
    
  <Navbar />
    <Route path="/" exact component={Home}/>
    <Route path="/page" component={Page} />

    <Route path="/blank" component=""/>

    </Router>
  );
}

export default App;
