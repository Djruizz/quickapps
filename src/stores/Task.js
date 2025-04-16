import {defineStore} from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () =>({
        tasks: []
    }),
    actions:{
        addTask(task){
            this.tasks.push(task)
        },
        updateTask(task, id){
            this.tasks[id] = task
        },
        deleteTask(id){
            this.tasks.splice(id, 1)
        }
    },
    persist:true
})