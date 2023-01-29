import {createRouter, createWebHistory} from 'vue-router'
import MainView from '@/views/MainView'
import JavaSpringView from "@/views/JavaSpringView";
import Vue3View from "@/views/Vue3View";
import BlocksView from "@/views/BlocksView";
import NodeVueView from "@/views/NodeVueView";
import VerstkaView from "@/views/VerstkaView";


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
            {
                path: '/vue3',
                component: Vue3View
            },
            {
                path: '/node-vue',
                component: NodeVueView
            },
            {
                path: '/verstka',
                component: VerstkaView
            },
            {
                path: '/blocks',
                component: BlocksView
            },
        ],
        history: createWebHistory()
    })

export default router