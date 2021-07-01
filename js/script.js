const app =  new Vue({
    el:"#app",
    data:{
        toDoLIst:["comprare le mele", "andare dal fabbro", "comprare le cicche "]

    },
    created(){

       

    },
    methods:{
        indexPlus : function(index){
            return index+1
        },
        cross : function(index){
            if(index % 2 ===0){
                return "far fa-times-circle"
            }
        }
        
    }
}
);