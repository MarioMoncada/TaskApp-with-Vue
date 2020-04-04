var app = new Vue({
  el: "#app",
  data: {
    title: "Dialy Task",
    task: [],
    newTask: "",
    color: false
  },
  methods: {
    addTask() {
      this.task.push({
        name: this.newTask,
        state: false
      });
      this.newTask = "";
      localStorage.setItem("tasks-vue", JSON.stringify(this.task));
    },
    editTask(index) {
      this.task[index].state = true;
      localStorage.setItem("tasks-vue", JSON.stringify(this.task));
    },
    deleteTask(index) {
      this.task.splice(index, 1);
      localStorage.setItem("tasks-vue", JSON.stringify(this.task));
    }
  },
  created: function() {
    let dataDB = JSON.parse(localStorage.getItem("tasks-vue"));
    if (dataDB === null) {
      this.task = [];
    } else {
      this.task = dataDB;
    }
  }
});
