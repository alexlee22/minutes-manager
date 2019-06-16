import React, { Component } from 'react';
import { addTask, removeTask } from '../actions/minutesActions';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

import { styled } from '@material-ui/styles';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });
//<MyButton variant="outlined" onClick={this.addTask}>Add Task</MyButton>


const emptyTask = {
    "number": 123456,
    "name": "Task Name",
    "tag": "Alex",
    "notes":[
        "Note 1",
        "Note 2",
        "Note 3",
    ]
}


class Minutes extends Component {
    
    addTask = () => {
        this.props.addTask();
    }
    removeTask = (idx) => {
        this.props.removeTask(idx);
    } 

    

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.addTask}>Add Task</Button>
                
                <div>
                    { this.props.minutes.data.map((d, i) => 
                    <Card key={i}>
                        <CardContent>
                            <Typography color="textSecondary" variant="h4" gutterBottom>{d.number} - {d.name}</Typography>
                            <Typography color="textSecondary" gutterBottom>{d.tag}</Typography>
                            <Typography color="textSecondary" gutterBottom>Notes</Typography>
                            <List component="nav" aria-label="Secondary mailbox folders">
                                {d.notes.map((note, idx) => 
                                    <ListItem key={idx} button>
                                        <TextField label="Name" value={note} margin="normal" />
                                        <DeleteIcon />
                                    </ListItem>
                                )}
                            </List>
                            <DeleteIcon onClick={()=>{this.removeTask(i)}} />
                        </CardContent>
                    </Card>
                    )}
                </div>
            </div>
        );
    }
}

/*
<ListItemText primary={note} />
<TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
*/

const mapStateToProps = state => ({
    ...state
    //data: state.minutes.data
})

const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(emptyTask)),
    removeTask: (idx) => dispatch(removeTask(idx))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Minutes);

