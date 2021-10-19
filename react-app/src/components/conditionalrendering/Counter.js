import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
    super()
    this.state ={
      count:0
    }

  }

incrementCount = () => {
  this.setState({
    count: this.state.count + 1
  }) 
} 


 render () {

    const {count} = this.state
//APPROCH-1:Conditional Approch reglr
//     if(count % 2 === 0){
//  return( 
//    <div>
//    <h1>Count: {this.state.count}</h1>
//     <h2>It's Even</h2>
// <button onClick={this.incrementCount}>Increment</button>

//    </div>
//       )
//     }else{
//  return( 
//    <div>
//    <h1>Count: {this.state.count}</h1>
// <h2>It's Odd</h2>
// <button onClick={this.incrementCount}>Increment</button>

//    </div>
//       )
//     }


//APPROCH-2:Part of ui defining as variable apporch

//  let element
//  if(count % 2 === 0){
//    element = <h2>It's Even</h2>
//  }else{
//       element = <h2>It's Odd</h2>
//  }

//   return(
//     <div>
//    <h1>Count: {this.state.count}</h1>
// {element}
// <button onClick={this.incrementCount}>Increment</button>

//    </div>
//   )

//APPROCH-3: Teronary operator
return(
    <div>
   <h1>Count: {this.state.count}</h1>
<h2>{count %2===0 ? 'Its Even' : 'Its Odd'}</h2>
<button onClick={this.incrementCount}>Increment</button>
 
   </div>
  )

    }

}

export default Counter ; 