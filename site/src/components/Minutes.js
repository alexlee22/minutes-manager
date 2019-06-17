import React, { Component } from 'react';
import { addTask, removeTask, updateNote, addNote, removeNote } from '../actions/minutesActions';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

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
    addNote = (noteidx) => {
        this.props.addNote(noteidx);
    }
    removeNote = (cardidx, noteidx) => {
        this.props.removeNote({
            card: cardidx,
            note: noteidx
        });
    }
    updateNote = (event, prev, cardidx, noteidx) => {
        if (event.target.value != prev){
            //console.log("Update me!");
            this.props.updateNote({
                value: event.target.value,
                card: cardidx,
                note: noteidx
            })
        } else {
            //console.log("Does not need to be updated!");
        }
    }

    render() {
        console.log(this.props.minutes.data)
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
                                        <Input
                                            placeholder="Note"
                                            defaultValue={note}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            onBlur={(e)=>{this.updateNote(e, note, i, idx)}}
                                        />
                                        <DeleteIcon onClick={()=>{this.removeNote(i, idx)}} />
                                    </ListItem>
                                )}
                            </List>
                            <AddIcon onClick={()=>{this.addNote(i)}} />
                        </CardContent>
                    </Card>
                    )}
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(emptyTask)),
    removeTask: (idx) => dispatch(removeTask(idx)),
    
    addNote: (idx) => dispatch(addNote(idx)),
    removeNote: (idxs) => dispatch(removeNote(idxs)),
    updateNote: (data) => dispatch(updateNote(data))  
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Minutes);

