// ~/components/TodoList.js
import { Box, Button, Grid, TextField } from '@mui/material';
import {useState} from 'react'; // useState is a "hook"

// Create an event handler

const onAddTodoClick = () => {
    console.log('clicked');
}

export default function TodoList(props) {
    // The following is state that our component will manage
    const [todoText, setTodoText] = useState("");
    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }

    return <>
        <TextField id="standard-basic" label="New Todo?"
           variant="standard" sx={{width: '100%'}}
           onChange={onTodoTextChange} value={todoText} />
        <Button variant='contained' onClick={onAddTodoClick}>Add Todo</Button>
    </>
}
