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
                                <input type="text" class="form-control" id="TaskNameInput" v-model="this.newTask.taskName" required>
                                <label for="TaskNameInput">Task Name</label>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" id="TaskDescriptionInput" v-model="this.newTask.description" style="height: 100px;" required></textarea>
                                <label for="TaskDescriptionInput">Task Description</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-success mx-2" @click="sendTaskData">Add</button>
                            <button class="btn btn-danger mx-2 " @click="cancelAddTask">Cancel</button>
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
        name:"AddTask",
        data(){
            return{
                newTask:{taskName:'', description:''}
            }
        },
        methods:{
            sendTaskData(event){
                event.preventDefault(); // Evita que el formulario se envíe por defecto

                if (!this.newTask.taskName.trim() || !this.newTask.description.trim()) {
                    alert("Por favor, completa todos los campos.");
                    return;
                }
                useTaskStore().addTask(this.newTask)
                this.newTask = {taskName:'', description:''}
                this.backToMain();
            },
            cancelAddTask(){
                this.backToMain();
            },
            backToMain(){
                this.$router.push('/ToDo')
            }
        }
    }
</script>

<style scoped>

</style>