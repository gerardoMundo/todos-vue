const app = new Vue({
  el: "#app",
  data: {
    title: "Agrega una nueva tarea a la lista de To-Do's",
    tasks: [],
    newTask: "",
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        name: this.newTask,
        state: false,
      });

      this.newTask = "";
    },
    changeState: function (index) {
      this.tasks[index].state = true;
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
  },
});
