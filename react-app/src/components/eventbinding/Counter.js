import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
    super()
    this.state ={
      count:0
    }
    // this.incrementCount = this.incrementCount.bind(this)
    // this.decrementCount = this.decrementCount.bind(this)
  }

// incrementCount = () => {
//   this.setState({
//     count: this.state.count + 1
//   }) 
// } 
incrementCount = (stepValue) => {
  this.setState({
    count: this.state.count + stepValue
  }) 
} 


//cannot use with dirct function instead arrow function to be used

// incrementCount() {
//   this.setState({
//     count: this.state.count + 1
//   }) 
// } 

// decrementCount() {
//   this.setState({
//     count: this.state.count - 1
//   }) 
// } 

 render () {

 return( 
   <div>
   <h1>Count: {this.state.count}</h1>
{/*       <button onClick={this.incrementCount.bind(this,5)}>Increment by 5</button>
<button onClick={this.incrementCount}>Increment</button>
<button onClick={this.decrementCount}>decrement</button>
*/}
<button onClick={() => {this.incrementCount(5)}}>Increment by 5</button>

   </div>
      ) 
    }

}

export default Counter ; 