const { createApp } = Vue;

createApp({
  data() {
    return {
      newTitle: "",
      newContent: "",
      editingItems: null,
      keyword: "",
      sortType: "new",
      filter: "all",
      items: [],
    }
  },

  methods: {
    addItem() {
      if (!this.newTitle.trim() || !this.newContent.trim()) return;

      this.items.push({
        id: Date.now(),
        title: this.newTitle,
        content: this.newContent,
        completed: false,
      });

      this.newTitle = "";
      this.newContent = "";
    },

    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },

    editItem(item) {
      this.editingItems = item;
      this.newTitle = this.editingItems.title;
      this.newContent = this.editingItems.content
    },

    updateItem() {
      if (!this.newTitle.trim() || !this.newContent.trim()) return;

      this.editingItems.title = this.newTitle;
      this.editingItems.content = this.newContent;

      this.editingItems = null;
      this.newTitle = "";
      this.newContent = "";
    },

    changeFlg(item) {
      item.completed = !item.completed;
    },


  },

  computed: {
    filteredItems() {
      let result = this.items;

      if (this.keyword.trim()) {
        result = result.filter(item =>
          item.title.includes(this.keyword)
        );
      }

      if (this.filter === "complete") {
        result = result.filter(item => item.completed);
      } else if (this.filter === "active") {
        result = result.filter(item => !item.completed)
      }

      if (this.sortType === "new") {
        result = [...result].sort((a, b) => b.id - a.id);
      } else if (this.sortType === "old") {
        result = [...result].sort((a, b) => a.id - b.id);
      }
      return result;
    },

    totalCount() {
      return this.items.length;
    },

    completedCount() {
      return this.items.filter(item => item.completed).length;
    },

    activeCount() {
      return this.items.filter(item => !item.completed).length;
    }
  }
}).mount("#app");