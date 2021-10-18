import React, {Component} from 'react'
import CounterTrigger from './CounterTrigger'

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

 return( 
   <div>
   <h1>Count: {this.state.count}</h1>
   <CounterTrigger incrementCount={this.incrementCount} />
   </div>
      )
    }

}

export default Counter ;