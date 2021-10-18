import React, { Component } from 'react'; 

class Counter extends Component {

  constructor (){
    super();
    this.state = {
      count:0,
      userInfo:{
        firstName:'',
        lastName:''
      },
      taskName: '',
      todos: []

    }
  }

  // incrementCount = () => {
  //   // this.setState({
  //   //   count : this.state.count+1
  //   // })
  //   this.setState((prevState, props) => {
  //     return {
  //       count: prevState.count+1
  //     }
  //   })
  // }

  // incrementCountFive = () => {
  //   let i = 5;
  //    while(i>0){
  //     this.setState((prevState, props) => {
  //     return {
  //       count: prevState.count+1
  //     }
  //   })
  //     i--;
  // }
  // }

// updateFirstName = (event) => {
//   this.setState({
//     userInfo : {
//       ...this.state.userInfo,
//       firstName : event.target.value
//     }
//   })
// }
// updateLastName = (event) => {
//   this.setState({
//     userInfo : {
//             ...this.state.userInfo,
//       lastName : event.target.value
//     }
//   })
// }

updateTaskName = (event) => {
  this.setState({
    taskName : event.target.value
  })
}

// do not modify the this.state.todos instead make a copy of it by rest parameters

// addTaskToList = () => {
//   const {taskName} = this.state;
//   const updatedTodos = this.state.todos;
//   updatedTodos.push(taskName);
//   this.setState({
//     todos:updatedTodos
//   })
// }

addTaskToList = () => {
  const {taskName} = this.state;
   this.setState({
    todos:[...this.state.todos, taskName]
  })
}

  render(){
const {count, userInfo, todos} =this.state
    return(
      <div>
     <label>Add Task: </label>
     <input onChange={this.updateTaskName} />
     <button onClick ={this.addTaskToList}>Add</button>
     <ul>
     {
       todos.map((todo)=>{
         return <li>{todo}</li>
       })
     }
     </ul>
     {
    //  <h1>{userInfo.firstName} {userInfo.lastName}</h1>
    //  <label> Firstname: </label>
    //  <input onChange={this.updateFirstName} /> 
    //  <br /><br />
    //  <label> Lastname: </label>
    //   <input onChange={this.updateLastName} />      
            
    //    <h1> Count: {count}  </h1>
    //  <button onClick={this.incrementCountFive}>Increment by 5</button>
     }
      </div>

    )
  }

}
export default Counter ;