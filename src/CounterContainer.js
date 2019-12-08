import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    counter: state
});
const CounterComponent = ({ counter, dispatch }) => {
    return(
        <>
            <div>{ counter }</div>
            <button onClick={() => dispatch({ type: 'ADD1' })}>+1</button>
            <button onClick={() => dispatch({ type: 'REMOVE1' })}>-1</button>
            <button onClick={() => dispatch({ type: 'ADD10' })}>+10</button>
            <button onClick={() => dispatch({ type: 'REMOVE10' })}>-10</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </>
    )
};
const CounterContainer = connect(mapStateToProps) (CounterComponent);
export default CounterContainer;