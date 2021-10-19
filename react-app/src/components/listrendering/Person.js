import React, { Component } from 'react';

class Person extends Component {
  render(){
    
    const { person } = this.props;
    
    return(

      <div>
      <h2>Id: {person.id}</h2>
      <h2>Name: {person.name}</h2>      
      </div>
    )
  }
}

export default Person