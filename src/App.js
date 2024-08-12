import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';



function App() {
  const [data,setData]=useState(0)
  const [btnValue,setBtnValue]=useState('Click');
  const handleClick=()=>{
    setData(prev=>prev+1);
   
  }
  return (
    <div>
    <h1 data-testid='display'>{data}</h1>
    {/* <button onClick={()=>handleClick()} style={{backgroundColor: "red", textAlign: "center"}}>{btnValue}</button> */}
    <button onClick={handleClick} style={{textAlign: "center"}}>increment</button>
    {/* <img src='jkj' alt='hi' title='This is an Image'/> */}
    {/* <input id="myinput" name='myname' value="Abhin"/>
    <ul>
      <li className='abc'>List1</li>
      <li className='xyz'>List2</li>
    </ul> */}
    </div>
  );
}

export default App;
