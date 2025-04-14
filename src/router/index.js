import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ToDoList from '../components/ToDoList/ToDoList.vue'
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter.vue'

const routes = [
    {path:'/', name:'HomeView', component: HomeView},
    {path: '/ToDo', name:'ToDo', component: ToDoList},
    {path: '/CurrencyConverter', name:'Currency Converter', component: CurrencyConverter}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router