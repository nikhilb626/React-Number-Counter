import './App.css';
import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


function App() {
  
  const [num,setnum]=useState(0);



function decrease(){
  return setnum(num-1);
}


function increase(){
  return setnum(num+1);
}



  return (
<>
<div className="app_container">
    <h1 className="show">{num}</h1>
    <Tooltip title="decreament" aria-label="delete">
    <Button className="btn dec" onClick={decrease} style={{marginRight:"170px"}}><RemoveIcon/></Button>
    </Tooltip>
    
    <Tooltip title="increament" aria-label="add">
    <Button className="btn inc" onClick={increase}><AddIcon/></Button>
    </Tooltip>
</div>
</>
  );
}

export default App;
