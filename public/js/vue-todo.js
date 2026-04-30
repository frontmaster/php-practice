const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: "",
            todos: []
        };
    },
    computed:{
        incompleteTodos(){
            return this.todos.filter(todo => !todo.done);
        },
        completeTodos(){
            return this.todos.filter(todo => todo.done);
        }
    },

    methods:{
        addTodo(){
            if(!this.newTodo.trim()) return;

            this.todos.push({
                id:Date.now(),
                text:this.newTodo,
                done:false
            });
            this.newTodo = "";
        },
        
        completeTodo(todo){
            todo.done = true;
        },
        
        backTodo(todo){
            todo.done = false;
        },

        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
}).mount("#app");