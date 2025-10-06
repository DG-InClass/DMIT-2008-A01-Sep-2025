// ~/components/TodoList.js
import { Box, Button, Grid, TextField } from '@mui/material';

// Create an event handler
const onTodoTextChange = (event) => {
    console.log(event.target.value);
}

export default function TodoList(props) {
    return <>
        <TextField id="standard-basic" label="New Todo?" variant="standard"
           sx={{width: '100%'}} onChange={onTodoTextChange} />
    </>
}
