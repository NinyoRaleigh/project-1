import {  createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';
import AnnouncementPage from './pages/AnnouncementPage.vue';

const routes = [

    {
        path : "/",
        component: HomePage,
    },
    {
        path : "/about",
        component: AboutPage,
    },
        {
        path : "/contact",
        component:ContactPage,
    }
    ,
        {
        path : "/announcement",
        component:AnnouncementPage,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;