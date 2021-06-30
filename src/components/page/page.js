
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./page.css";
import store from "../../store";
import { useSelector } from 'react-redux';
import Filterdata from '../../Reducers/Filterdata';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
function Page() {
   
useEffect( async ()=>{
   
},[]);

store.subscribe(()=>{
    store.getState();
});

const ShowData=(d,currentRow)=>{
    store.dispatch({type:"FILTER_DATA_ADDED",
    payload:{
        Filterdata:currentRow
    }});
}
    const classes = useStyles();
  const mystate=useSelector((state)=>state.ApiDataReducer);
  const Showstate=useSelector((state)=>state.Filterdata);
  const inputstate=useSelector((state)=>state.Userinput);

const Filtering=(d)=>{
console.log("value",d);
store.dispatch({type:"INPUT_ADDED",
    payload:{
        inputdata:d
    }});
    inputstate.length>0 && console.log("input state",inputstate[inputstate.length-1].inputdata);
}

    return (
      <>

     <Grid container spacing={3} mt={2} >
         
        <Grid item xs>
        <input type="text...." placeholder="Search...." onChange={(e)=>Filtering(e.target.value)}  className="input-adj" />

          <Paper className={classes.paper}>{
          
         

                mystate.filter((val)=>{
        

                    if(inputstate.length >0 && inputstate[inputstate.length-1].inputdata  === "")
                    {
                      console.log("val",val.data.results[0].name.first)
                              return val.data.results[0].name.first;
                    }
                  else if(inputstate.length >0 && val.data.results[0].name.first.toLowerCase().includes(inputstate[inputstate.length-1].inputdata.toLowerCase()))
                  {
                      console.log("val2",val.data.results[0].name.first)
                                  return val.data.results[0].name.first;
                  }
                  
                  
                  }
                    
                    ).map((d,key)=>{
                        
                        return<div className="handle-mapping" onClick={(e)=>ShowData(e.currentTarget,d.data.results[0])}   key={key}>{d.data.results[0].name.first}</div>
                      
                      
                          })}
                
                </Paper>



        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
              <img src={Showstate && Showstate[Showstate.length-1].Filterdata.picture.medium}  className="adjust-image" />
             <div> {Showstate && Showstate[Showstate.length-1].Filterdata.name.last}</div>
              </Paper>
        </Grid>
        
      </Grid>

      <br></br>
      <br></br>

      <br></br>

      <br></br>
{/* //val.data.results[0].name.first */}
<div className="sad"></div>
    </>
   
    );
  }



 
  
  
  export default Page;
  
//   Object.keys(mystate).map((d,key)=>{
              
//     return<div className="handle-mapping" id={mystate[d].data.results[0].cell} onClick={(e)=>ShowData(e.currentTarget,mystate[d].data.results[0])} key={key}>{mystate[d].data.results[0].name.first}</div>
  
  
//       })

  //   {Object.keys(user).map((d,key)=>{