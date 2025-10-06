// ~/components/TodoList.js
import { Box, Button, Grid, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react'; // useState is a "hook"


export default function TodoList(props) {
    // The following is state that our component will manage
    const [todoText, setTodoText] = useState(""); // Single Todo Item
    const [allTodos, setAlltodos] = useState([]); // All the Todo Items

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }

    const onAddTodoClick = () => {
        console.log('clicked');
        // create a new list that has allTodos and the new todo item
        const newAllTodoList = [...allTodos, todoText];
        console.log('Updated TODO List:', newAllTodoList);
        // preserve this new state of all the todo items
        setAlltodos(newAllTodoList);
        // reset the value of the todo text.
        setTodoText(""); // and empty string
    }


    return <>
        <TextField id="standard-basic" label="New Todo?"
            variant="standard" sx={{ width: '100%' }}
            onChange={onTodoTextChange} value={todoText} />
        <Button variant='contained' onClick={onAddTodoClick}>Add Todo</Button>
        <Grid item xs={12}>
            <List sx={{ width: '100%' }}>
                {allTodos.map((todoItem, index) => <ListItem key={index}>
                    <ListItemText>
                        <Typography variant='p' component='div'>
                            {todoItem}
                        </Typography>
                    </ListItemText>
                </ListItem>)}
            </List>
        </Grid>
    </>
}
