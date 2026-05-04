const { createApp } = Vue;

createApp({
  data() {
    return {
      newName: "",
      newAge: "",
      users: [],
      editingUser: null,
    }
  },

  methods: {
    addInfo() {
      if (!this.newName.trim() || !this.newAge.trim()) return;
      this.users.push({
        id: Date.now(),
        name: this.newName,
        age: Number(this.newAge)
      });
      this.newName = "";
      this.newAge = "";
    },

    deleteInfo(id) {
      this.users = this.users.filter(user => user.id !== id);
    },

    editInfo(user) {
      this.editingUser = user;
      this.newName = user.name;
      this.newAge = user.age;
    },

    updateInfo(){
      if(!this.newName.trim() || !this.newAge.trim()) return;

      this.editingUser.name = this.newName;
      this.editingUser.age = Number(this.newAge);

      this.editingUser = null;
      this.newName = "";
      this.newAge = "";
    }

  }
}).mount("#app");