import React, { Component } from 'react';
import { addTask, removeTask } from '../actions/minutesActions';
import { connect } from 'react-redux';

class Minutes extends Component {
    
    addTask = () => {
        this.props.addTask();
    }
    removeTask = (idx) => {
        this.props.removeTask(idx);
    } 

    render() {
        console.log(this.props.minutes.data)
        return (
            <div>
                <button onClick={this.addTask}>Test redux action</button>
                <ul>
                    { this.props.minutes.data.map((d, i) => 
                        <li key={i} onClick={() => { this.removeTask(i)}}>{d}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
    //data: state.minutes.data
})
  
const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(task)),
    removeTask: (idx) => dispatch(removeTask(idx))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Minutes);

