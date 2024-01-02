import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'

const routes = [
  {
    path: '/',
    name: 'Homeview',
    component: Homeview
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
