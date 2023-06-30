const express = require('express');
const bodyParser = require('body-parser');
const tasksController = require('./controlers/tasks')
const app = express();
app.use(bodyParser.json());

app.get('/tasks', tasksController.getAllTasks);
app.get('/tasks/:id',tasksController.getTaskById);
app.post('/tasks',taskController.createTask);
app.put('/taks/:id',tasksController.updateTask);
app.delete('/tasks/:id',tasksController.deleteTask);



