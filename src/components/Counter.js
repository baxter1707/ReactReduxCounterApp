import React, { Component } from 'react';
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import { connect } from 'react-redux'

class Counter extends Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
        <div>
          <CounterOutput counterLabel = {this.props.ctr} />
          <CounterControl title="increment +1" onIncrementCounter = {this.props.onIncrementCounter} />
          <CounterControl title="decrement -1"
          onIncrementCounter = {this.props.onDecrementCounter}/>
          <CounterControl title="increment by +5" onIncrementCounter = {this.props.onAddCounter} />
          <CounterControl title="decrement by -5" onIncrementCounter = {this.props.onSubCounter} />


        </div>
    )
  }

}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type : "INC_COUNTER"}),
    // write the code for DEC_COUNTER
    onDecrementCounter : () => dispatch({type : "DEC_COUNTER"}),
    // write the code to ADD_COUNTER
    onAddCounter : () => dispatch({type : "ADD_COUNTER"}),
    // write code for SUBTRACT_COUNTER
    onSubCounter : () => dispatch({type : "SUB_COUNTER"})
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
