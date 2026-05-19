const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: "",
      keyword: "",
      todos: [],
      editingTodo: null,
      filter: "all",
      sortType: "new",
    }
  },

  methods: {
    addTodo() {
      if (!this.newTodo.trim()) return;

      this.todos.push({
        id: Date.now(),
        name: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },

    editTodo(todo) {
      this.editingTodo = todo;
      this.newTodo = todo.name;
    },

    updateTodo() {
      if (!this.newTodo.trim()) return;

      this.editingTodo.name = this.newTodo;

      this.newTodo = "";
      this.editingTodo = null;
    },

    changeFlg(todo) {
      todo.completed = !todo.completed;
    }
  },

  computed: {
    filteredTodos() {
      let result = this.todos;

      if (this.filter === "inComplete") {
        result = result.filter(todo => !todo.completed);
      } else if (this.filter === "complete") {
        result = result.filter(todo => todo.completed);
      }

      if (this.keyword.trim()) {
        result = result.filter(todo => todo.name.toLowerCase().includes(this.keyword.toLowerCase()));
      }

      if (this.sortType === "new") {
        result = [...result].sort((a, b) => b.id - a.id);
      } else {
        result = [...result].sort((a, b) => a.id - b.id);
      }
      return result;
    }
  }
}).mount("#app");