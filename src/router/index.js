import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import ToDoList from '../components/ToDoList/ToDoList.vue'
import AddTask from '@/components/ToDoList/AddTask.vue'
import EditTask from '@/components/ToDoList/EditTask.vue'

import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter.vue'



const routes = [
    {path:'/', name:'HomeView', component: HomeView},
    {path: '/ToDo', name:'ToDo', component: ToDoList},
    {path: '/ToDo/add', name:'addTask', component: AddTask},
    {path: '/ToDo/edit/:id', name:'editTask', component: EditTask},
    {path: '/CurrencyConverter', name:'Currency Converter', component: CurrencyConverter}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router