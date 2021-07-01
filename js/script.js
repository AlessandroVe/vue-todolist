const app =  new Vue({
    el:"#app",
    data:{
        toDoLIst:["comprare le mele", "andare dal fabbro", "comprare le cicche ",],
        newTask:"",
    },
    created(){



    },
    mounted(){
        const  newTaskElement = document.getElementById("newTaskElement");
        newTaskElement.focus();
    },
    methods:{
        indexPlus : function(index){
            return index+1
        },
        cross : function(index){
            if(index % 2 ===0){
                return "far fa-check-circle "
            }else{
                return "far fa-times-circle"
            }
        },
        addTask: function (){
            this.toDoLIst.push(this.newTask);
            this.newTask="";
        }
        
    }
}
);