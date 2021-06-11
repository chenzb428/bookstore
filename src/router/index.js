import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomePage from '../views/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    component: () => import('../views/NewBooks'),
    meta: {
      title: '新书上市'
    }
  },
  {
    path: '/bargainBooks',
    name: 'bargainBooks',
    component: () => import('../views/BargainBooks'),
    meta: {
      title: '特价书'
    }
  },
  {
    path: '/teachingMaterial',
    name: 'teachingMaterial',
    component: () => import('../views/TeachingMaterial'),
    meta: {
      title: '教材'
    }
  },
  {
    path: '/audioVisualCourse',
    name: 'audioVisualCourse',
    component: () => import('../views/AudioVisualCourse'),
    meta: {
      title: '视听教程'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search'),
    meta: {
      title: '搜索结果'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('../views/Category'),
    meta: {
      title: '购物图书分类'
    }
  },
  {
    path: '/book/:id',
    name: 'book',
    component: () => import('../views/Book'),
    meta: {
      title: '图书'
    }
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../views/CheckOut'),
    meta: {
      title: '结算',
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    // 路由需要验证，判断用户是否已经登录
    if(store.state.user.user){
      next(); 
    }
    else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  }
  else
    next();
})

router.afterEach((to) => {
  document.title = to.meta.title;
})

export default router
