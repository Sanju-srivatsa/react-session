import React, { Component } from 'react'; 

class TodoList extends Component {
  render(){

    const ListHeading = 'Tasks to be Completed'
    return(
      <div>
      <h1>{ListHeading}</h1>
      <ul>
        {this.props.children}
      </ul>
      </div>
    )
  }
}

export default TodoList;