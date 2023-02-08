const app = new Vue({
  el: "#app",
  data: {
    title: "Agrega una nueva tarea a la lista de To-Do's",
    tasks: [],
    newTask: "",
  },

  methods: {
    saveItem: function () {
      localStorage.setItem("vue-item", JSON.stringify(this.tasks));
    },

    addTask: function () {
      this.tasks.push({
        name: this.newTask,
        state: false,
      });

      this.newTask = "";
      this.saveItem();
    },

    changeState: function (index) {
      this.tasks[index].state = true;
      this.saveItem();
    },

    deleteTask: function (index) {
      this.tasks.splice(index, 1);
      this.saveItem();
    },
  },
  created: function () {
    let data = JSON.parse(localStorage.getItem("vue-item"));

    if (data === null) {
      this.tasks = [];
    } else {
      this.tasks = data;
    }
  },
});
