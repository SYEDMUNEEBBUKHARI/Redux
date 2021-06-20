
import './App.css';
import store from "./store";
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
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          <button onClick={myfunc}> Click me</button>
          Learn React
    
      </header>
    </div>
  );
}

export default App;
