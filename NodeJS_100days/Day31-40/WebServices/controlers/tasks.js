const Task = require('../models/task');

// Obtener todas las tareas
exports.getAllTasks = (req,res) => {
    const tasks = Task.getAll();
    res.json(tasks);
};

// Obtener una tarea por ID
exports.getTaskById = (req,res) => {
    const taskId = req.params.id;
    const task = Task.getById(taskId);
    
    if (!task) {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        res.json(task);
    }
};

// Crear una nueva tarea
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = Task.create(title, description);
    res.status(201).json(newTask);
};

// Actualizar una tarea existente
exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    const updatedTask = Task.update(taskId, title, description);
    
    if (!updatedTask) {
      res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
      res.json(updatedTask);
    }
};
  
// Eliminar una tarea
exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    const deletedTask = Task.delete(taskId);
    
    if (!deletedTask) {
      res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
      res.json(deletedTask);
    }
};  
