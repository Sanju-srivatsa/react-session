import React from 'react'

class ClassComponent extends React.Component{
    render () {
      const {name, age} =this.props;
 return( <h1> helloo {name} you born in {age} </h1>
      )
    }

}

export default ClassComponent;