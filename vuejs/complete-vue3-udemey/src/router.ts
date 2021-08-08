import { createWebHistory, createRouter } from 'vue-router';
import Hello from './components/Hello.vue';
import Posts from './components/Posts.vue';
import Post from './components/Post.vue';
import RouteProp from './components/RouteProp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello',
      component: Hello,
      name: 'hello',
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        {
          path: ':id',
          component: Post,
        },
      ],
    },
    {
      path: '/routeProp/:msg',
      name: 'routeProp',
      component: RouteProp,
      props: true,
    },
  ],
});

export { router };
