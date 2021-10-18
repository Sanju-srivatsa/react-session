import './App.css';
import Counter from './components/Counter'
{/*import TodoList from './components/TodoList'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'*/}
function App() {
  {/*const userName ="Srivatsa"
  const age ='1998'
const todos = [{name:'Task 1', completed: true}, 
                   {name:'Task 2', completed: false},
                   {name:'Task 3', completed: true},] */}
  return (
    <div className="App">

    <Counter />

{/*    <ClassComponent name="Sanju" age={age} />
    <FunctionalComponent  name={userName} age="23"/>
     <TodoList>
             {
          todos.map((todo) => {
            return <li>Name: {todo.name}, 
            Status: {todo.completed ? <span style = {{color:'green'}}>'Completed'</span> 
            : <span style = {{color:'red'}}>'Not Completed' </span>}</li>  
          })
        }
        </TodoList>*/ }
    </div>
  );
}

export default App;
