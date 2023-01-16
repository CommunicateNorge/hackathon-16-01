import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import HelloWorld2 from '@/components/HelloWorld2.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/hello-world-2',
        name: 'HelloWorld2',
        component: HelloWorld2
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;