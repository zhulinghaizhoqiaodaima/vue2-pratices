/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-13 18:50:47
 */
import Vue from 'vue'
Vue.use(VueRouter)
import VueRouter from 'vue-router'

const routes = [{
    path: '/props',
    name: 'Props',
    component: () => import('../views/props.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router