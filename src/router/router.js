import {createRouter, createWebHistory} from 'vue-router'
import MainView from '@/views/MainView'
import Vue3View from "@/views/Vue3View";
import BlocksView from "@/views/BlocksView";
import NodeVueView from "@/views/NodeVueView";
import VerstkaView from "@/views/VerstkaView";
import InformaionView from "@/views/InformaionView";


const router = createRouter({
        routes:[
            {
                path: '/',
                component: MainView
            },
            {
                path: '/java-vue',
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
            {
                path: '/info',
                component: InformaionView
            },
        ],
        history: createWebHistory()
    })

export default router