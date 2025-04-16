<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col12 text-center">
            <div class="card">
                <h3 class="card-title mt-4">To Do List</h3>
                <div class="card-body">
                    <form>
                        <div class="row bg-success aling-items-center p-3 m-2 border rounded text-light">
                        <h2>Add Task</h2>
                    </div>
                    <div class="row mx-2">
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="TaskNameInput" v-model="this.Task.taskName" required>
                                <label for="TaskNameInput">Task Name</label>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" id="TaskDescriptionInput" v-model="this.Task.description" style="height: 100px;" required></textarea>
                                <label for="TaskDescriptionInput">Task Description</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-success mx-2" @click="updateTaskData">Save</button>
                            <button class="btn btn-danger mx-2 " @click="deleteTask">Delete</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/Task';
export default{
    name:'EditTask',
    data(){
        return{
            
            taskId: this.$route.params.id,
            Task: {taskName:'', description:''}
        }
    },
    methods:{
        updateTaskData(event){
            event.preventDefault(); // Evita que el formulario se envíe por defecto

            if (!this.Task.taskName.trim() || !this.Task.description.trim()) {
                alert("Por favor, completa todos los campos.");
                return;
            }
            useTaskStore().updateTask(this.Task, this.taskId)
            this.backToMain();
        },
        deleteTask(){
            useTaskStore().deleteTask(this.taskId)
            this.backToMain();
        },
        backToMain(){
            this.$router.push('/ToDo')
        }
    },
    created(){
        this.Task = useTaskStore().tasks[this.taskId]
    }
}
</script>

<style scoped>

</style>