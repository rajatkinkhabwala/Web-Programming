const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid-v4');

let exportedMethods = {
  async getTask(id) {
    if (!id) throw "You must provide an id to search for";

    const todoItemsCollections = await todoItems();
    const task = await todoItemsCollections.findOne({ _id: id });
    if (task === null) throw "No task with that id";

    return task;
  },
  async getAllTasks() {
    const todoItemsCollections = await todoItems();

    const tasks = await todoItemsCollections.find({}).toArray();
    
    return tasks;
  },
  async createTask(title, description) {
    if (!title) throw "You must provide a title";
    if (!description) throw "You must provide a description";

    const todoItemsCollections = await todoItems();
    let id = uuidv4();

    const newTask = {
      _id: id,
      title: title,
      description: description, 
      completed: false,
      completedAt: null
    };

    const insertInfo = await todoItemsCollections.insertOne(newTask);
    if (insertInfo.insertedCount === 0) throw "Could not add post";

    const newTaskDetails = await this.getTask(insertInfo.insertedId);

    return newTaskDetails;
  },
  async removeTask(id) {
    const todoItemsCollections = await todoItems();
    const deletionInfo = await todoItemsCollections.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete task with id of ${id}`;
    }
  },
  async completeTask(taskId) {
      if(!taskId) throw "You must provide id"

    const todoItemsCollections = await todoItems();
    let today = new Date();
    let currentDay = (today.getMonth() + 1) + '/'+today.getDate()+'/'+today.getFullYear();
    let currentTime = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    let completedTime = currentDay +" "+currentTime;

    const updatedInfo = await todoItemsCollections.updateOne(
      { _id: taskId },
      {$set:{completed: true, completedAt: completedTime}}
    );

    if (updatedInfo.modifiedCount === 0) {
      throw "could not complete task successfully";
    }

    return await this.getTask(id);
  }
};

module.exports = exportedMethods;
