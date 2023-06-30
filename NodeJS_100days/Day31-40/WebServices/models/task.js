const { v4: uuidv4 } = require('uuid');

const tasks = [];

// Obtener todas las tareas
exports.getAll = () => tasks;

// Obtener una tarea por ID
exports.getById = (id) => tasks.find((task) => task.id === id);

// Crear una nueva tarea
exports.create = (title, description) => {
  const newTask = {
    id: uuidv4(),
    title,
    description,
  };
  tasks.push(newTask);
  return newTask;
};

// Actualizar una tarea existente
exports.update = (id, title, description) => {
  const task = tasks.find((t) => t.id === id);
  
  if (task) {
    task.title = title;
    task.description = description;
    return task;
  }
  
  return null;
};

// Eliminar una tarea
exports.delete = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  
  return null;
};