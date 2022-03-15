import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import('../views/auth')
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import('../views/profile')
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import('../views/chat')
  },
  {
    path: "/my-book",
    name: "myBook",
    component: () => import('../views/myBook')
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import('../views/favorites')
  },
  {
    path: "/message",
    name: "Message",
    component: () => import('../views/message')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
