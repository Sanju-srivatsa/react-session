import React from 'react'

// function FunctionalComponent () {
// return <h1> Func</h1>
// }

const FunctionalComponent = (props) => {
  return <h1>Hey {props.name}, You are {props.age}</h1>
  // return React.createElement(
  //   'h1',
  //   null,
  //   'I am Functional Component created from React.create'
  // )
}

export default FunctionalComponent; 