import {createRouter, createWebHistory} from 'vue-router'
import MainView from '@/views/MainView'
import JavaSpringView from "@/views/JavaSpringView";


const router = createRouter({
        routes:[
            {
                path: '/',
                component: MainView
            },
            {
                path: '/java-spring',
                component: JavaSpringView
            },
        ],
        history: createWebHistory()
    })

export default router