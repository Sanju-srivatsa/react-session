import React from 'react';

function FunctionalCounter(props){
  
  const showAlert = () =>{
    alert('Hey Sanju')
  }
  
  
  return (
    <div>
    <button onClick={showAlert}>Alert</button>
    </div>
  )
}

export default FunctionalCounter