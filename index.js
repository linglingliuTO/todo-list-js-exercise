// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description ) {

  const task =  {
    title: title,
    description: description,
    complete: false,

    logState: function()  {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      task.complete = true;
    }



  };
  return task;

}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter"); // task 0
const task2 = newTask("Do Laundry"); // task 1
const tasks = [task1, task2]



task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed


