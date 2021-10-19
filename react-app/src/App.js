import './App.css';
import React from 'react'
import Counter from './components/conditionalrendering/Counter'
{/*import TodoList from './components/TodoList'
import Counter from './components/Counter'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FunctionalCounter from './components/FunctionalCounter'
import Counter from './components/eventbinding/Counter'
import Counter from './components/parentchild/Counter'
*/}


class App extends React.Component{
constructor(){
  super()
  this.state ={
    age : 23
  }
}
    render () {
  
 return( 
   <div className="App">
   <Counter />
   </div>
      )
    }

}
{/*
class App extends React.Component{
constructor(){
  super()
  this.state ={
    age : 23
  }
}
    render () {
  
 return( 
   <div className="App">
   <Counter />
   </div>
      )
    }

}

*/ }

{ /*
class App extends React.Component{
constructor(){
  super()
  this.state ={
    age : 23
  }
}
    render () {
  
 return( 
   <div className="App">
   <ClassComponent name ="Sanju" age ={this.state.age} />
   </div>
      )
    }

}
*/ }

{/*function App() {
  const userName ="Srivatsa"
  const age ='1998'
const todos = [{name:'Task 1', completed: true}, 
                   {name:'Task 2', completed: false},
                   {name:'Task 3', completed: true},] 
  return (
    <div className="App">

    <ClassComponent name="Sanju" age="23" />
*/}

{/*
    <Counter />

    <ClassComponent name="Sanju" age={age} />
    <FunctionalComponent  name={userName} age="23"/>
   
     <TodoList>
             {
          todos.map((todo) => {
            return <li>Name: {todo.name}, 
            Status: {todo.completed ? <span style = {{color:'green'}}>'Completed'</span> 
            : <span style = {{color:'red'}}>'Not Completed' </span>}</li>  
          })
        }
        </TodoList>
    </div>
  );
}    
        */ }
    

export default App;
