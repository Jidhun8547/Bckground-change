
import React, { useState } from 'react'

import './App.css';


function App() {
   const[bgColor,setBgcolor]=useState("white");
   
   const changeColor=(color)=>{
    setBgcolor(color)
   }
  return (
    <>
    <div className='container d-flex  align-item-center justify-content-center ' style={{ backgroundColor:bgColor, height: "100vh", }} >
      <div className='text-center'>
        <h1 className='p-4 text-decoration-underline' style={{fontFamily:"cursive"}}>Change background colour</h1>
        </div>
      
    
    <div className='d-flex align-item-center justify-content-center p-5 flex-column ' style={{marginRight:400}}>
        <button onClick={(c)=>changeColor("red")} type='button' className='btn btn-danger m-4 w-50' >red</button>
        <button onClick={(c)=>changeColor("green")} type='button' className='btn btn-success m-4 w-50' >green</button>
        <button onClick={(c)=>changeColor("yellow")} type='button' className='btn btn-warning m-4 w-50'>yellow</button>
        <button onClick={(c)=>changeColor("blue")} type='button' className='btn btn-primary m-4 w-50'>blue</button>
      </div>
      </div>
    </>
  )
}

export default App