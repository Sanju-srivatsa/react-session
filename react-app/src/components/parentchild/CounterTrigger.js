import React, {Component} from 'react'
 
class CounterTrigger extends Component{
  updateCount = (event) => {
    this.props.incrementCount();
  }
    render () {

 return( 
   <div>
<button onClick={this.updateCount}>Increment</button>
   </div>
      )
    }

}

export default CounterTrigger ;