import { createRouter, createWebHistory } from 'vue-router';

// Layouts import
import DefaultLayer from '../components/DefaultLayer.vue';
import NotFoundLayer from '../components/NotFoundLayer.vue';

// Views import
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayer,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundLayer,
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFoundLayer,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;