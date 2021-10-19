import React, { Component} from 'react';
import { Button } from 'react-bootstrap';
import Person from './Person'

class ListOfPersons extends Component {

constructor (){
  super()
  this.state={
    persons:[]
  }
}

addPersonToList = () => {
  let id = this.state.persons.length+1
  let name = `Person ${id}`
  let newPerson = {
    id,
    name
  }
  this.setState({
    persons: [...this.state.persons, newPerson]
  })
}

  render() {
    const {persons} =this.state
     return(
       <div>
      <Button variant="primary" onClick={this.addPersonToList}>Add Person to the List</Button>
       {persons.map((person)=>{
         return <Person person={person} key={person.id}/>
       })}
       </div>
     )
  }

}


export default ListOfPersons