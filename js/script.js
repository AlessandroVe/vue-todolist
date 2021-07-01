const app =  new Vue({
    el:"#app",
    data:{
        toDoLIst:[
            "Comprare le mele",
            "Andare dal fabbro mastro", 
            "Comprare le cicche ",
        ],
        newTask:"",
    },
    created(){



    },
    mounted(){
        this.autoFocus();
    },
    methods:{
        indexPlus : function(index){
            return index+1
        },
        autoFocus:function(){
            const  newTaskElement = document.getElementById("newTaskElement");
            newTaskElement.focus(); 
        },
        addTask: function (){
            this.toDoLIst.push(this.newTask);
            this.newTask="";
            this.autoFocus();
        },
        deleteTask: function (index){
            this.toDoLIst.splice(index,1)
            this.autoFocus();
        },
        
    }
}
);