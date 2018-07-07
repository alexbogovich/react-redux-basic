import React, {Component} from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {storeResult, deleteResult, add, decrement, increment, subtract} from "../../store/actions"

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 10" clicked={this.props.onAddNumber}/>
        <CounterControl label="Subtract 10" clicked={this.props.onSubtract}/>
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
        <ul>
          {
            this.props.storedResults
              .map(r => (<li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>{r.value}</li>))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddNumber: () => dispatch(add(10)),
    onSubtract: () => dispatch(subtract(10)),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteResult: (id) => dispatch(deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);