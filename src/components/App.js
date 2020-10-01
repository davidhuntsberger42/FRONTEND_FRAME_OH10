import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset, inptNum, changedInNum} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} 
        onReset={this.props.onReset} onInptNum={this.props.onInptNum} onChangedInNum={this.props.onChangedInNum} 
        trackClick={this.props.trackClick} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onInptNum: () => dispatch(inptNum()),
    onChangedInNum: (num) => dispatch(changedInNum(num))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numSet: state.numSet,
      trackClick: state.trackClick
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);