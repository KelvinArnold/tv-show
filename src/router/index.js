import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewTvShow from './../views/ViewTvShow';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ViewTvShow,
  }
]

const router = new VueRouter({
  routes,
})

export default router;