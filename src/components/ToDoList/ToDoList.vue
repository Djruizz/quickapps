<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col12 text-center">
            <div class="card">
                <h3 class="card-title mt-4">To Do List</h3>
                <div class="card-body">
                    <div class="row bg-success aling-items-center p-3 m-2 border rounded text-light">
                        <div class="col-3 d-flex align-items-center justify-content-center">
                            <h5 class="m-0">Task</h5>
                            
                        </div>
                        <div class="col d-flex align-items-center justify-content-center border-start border-end border-2 border-light">
                            <h5 class="m-0">Description</h5>
                            
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-center">
                            <h5 class="m-0">Completed</h5>
                            
                        </div>
                    </div>
                    <TaskComponent :isEditing="this.isEditing"></TaskComponent>
                    <div class="row pt-2">
                        <div class="col" v-if="this.TaskList.length > 0">
                            <button class="btn btn-secondary" @click="toggleEditTasks" v-if="!isEditing">Edit Tasks</button>
                            <button class="btn btn-danger" @click="toggleEditTasks" v-else>Cancel Edit</button>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col">
                            <button class="btn btn-success" @click="addTask">Add Task</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';
import { useTaskStore } from '@/stores/Task';
export default{
    name:"ToDoList",
    components:{
        TaskComponent,
        
    },
    data(){
        return{
            isEditing:false,
            TaskList: []
        }
    },
    methods:{
        addTask(){
            this.$router.push('/ToDo/add')
        },
        toggleEditTasks(){
            this.isEditing = !this.isEditing
        }
    },
    created(){
        this.TaskList = useTaskStore().tasks
    }
}
</script>

<style scoped>

</style>