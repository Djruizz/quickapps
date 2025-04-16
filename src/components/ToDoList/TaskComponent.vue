<template>
    <div class="row aling-items-center p-3 m-2 border rounded" :class="{'bg-secondary editable': isEditing}" v-for="task, index in TaskList" :key="index" @click="editTask(index)">
        <div class="col-3 d-flex align-items-center">
            <h5 class="m-0 me-2">{{ index+1 }}</h5>
            <h5 class="m-0">{{ task.taskName }}</h5>
        </div>

        <div class="col d-flex align-items-center">
            <p class="m-0">{{ task.description }}</p>
        </div>

        <div class="col-3 d-flex align-items-center justify-content-center">
            <input class="form-check-input m-0" type="checkbox" v-model="task.completed">
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/Task';
    export default{
        name:"TaskComponent",
        props:{
            isEditing:{type:Boolean, required:true}
        },
        data(){
            return{
                TaskList: useTaskStore().tasks
            }
        },
        methods:{
            editTask(task){
                if(this.isEditing){
                    this.$router.push(`/ToDo/edit/${task}`)
                }
            }
        },
    }
</script>

<style scoped>
.editable{
    transform: transform 0.3s ease;
}
.editable:hover{
    transform: translateY(-5px);
}
</style>