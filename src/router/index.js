
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
import SncRegister from "@/views/Signup.vue"
import UserProfile from "@/views/UserProfile.vue"
import DashboardPage from "@/views/DashboardPage.vue"
import Login from "@/views/Login"
import SettingsProfile from "@/views/SettingsProfile"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SncRegister
  },
  {
    path: '/dashboard',
    name: 'SncSensorData',
    component: DashboardPage,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsProfile
  },
]

const router =  createRouter({
  history: createWebHistory(),
  routes
})

export default router
