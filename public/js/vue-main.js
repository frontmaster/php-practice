const { createApp } = Vue;

createApp({
  data() {
    return {
      newName: "",
      newAge: "",
      users: [],
    }
  },

  methods:{
    addInfo(){
      if(!this.newName.trim() || !this.newAge.trim()) return;
      this.users.push({
        id: Date.now(),
        name: this.newName,
        age: Number(this.newAge)
      });
      this.newName = "";
      this.newAge = "";
    }
    
  }
}).mount("#app");