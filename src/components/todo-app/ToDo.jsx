import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [toDolist, setToDoList] = useState([]);

  const addTask = () => {
    if (input === "") {
      alert("Type Something");
      return;
    }

    const updateTask = [...toDolist, input];

    setToDoList(updateTask);

    localStorage.setItem("task", JSON.stringify(updateTask));

    setInput("");
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("task"));
    if (savedTasks) {
      setToDoList(savedTasks);
    }
  }, []);

  const removeTask = (index) => {
    const updatedTasks = toDolist.filter((_, i) => i !== index);

    setToDoList(updatedTasks);

    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <Typography className="pt-5 text-center" variant="h4">
          ToDo App
        </Typography>
        <Box className="d-flex justify-content-center align-items-center mt-5">
          <TextField
            value={input}
            sx={{ width: "20%" }}
            id="standard-basic"
            label="Add Todo"
            variant="standard"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button variant="outlined" className="mt-3 ms-3" onClick={addTask}>
            Add
          </Button>
        </Box>
      </Box>

      <Box className="d-flex justify-content-center align-items-center mt-3">
        <List className="w-25">
          {toDolist?.map((task, index) => (
            <ListItem
              className="border px-2 my-3 rounded-2"
              key={index}
              disableGutters
              secondaryAction={
                <IconButton
                  aria-label="delete"
                  onClick={() => removeTask(index)}
                >
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemText primary={` ${task}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ToDo;
