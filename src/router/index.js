import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      }, {
        path: '/img',
        component: () => import('../views/home/img.vue'),
        meta: { title: '相册管理' }
      },
      {
        path: '/imgs',
        component: () => import('../views/home/imgs.vue'),
        meta: { title: '相册' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },


  {
    path: '/vip',
    component: () => import('../views/vip/home.vue'),

    children: [
      {
        path: '/vip',
        component: () => import('../views/vip/vip.vue'),
        meta: { title: '会员' }
      },
      {
        path: '/vips',
        component: () => import('../views/vip/vips.vue'),
        meta: { title: '会员列表' }
      }
    ]
  },

  {
    path: '/order',
    component: () => import('../views/order/home.vue'),
    redirect: '/orders',
    children: [
      {
        path: '/orders',
        component: () => import('../views/order/order.vue'),
        meta: { title: '订单' }
      },
      {
        path: '/orderss',
        component: () => import('../views/order/orders.vue'),
        meta: { title: '订单列表' }
      }
    ]
  },

  {
    path: '/shopin',
    component: () => import('../views/shop/home.vue'),
    redirect: '/shop',
    children: [
      {
        path: '/shop',
        component: () => import('../views/shop/shop.vue'),
        meta: { title: '商品1' }
      },
      {
        path: '/shops',
        component: () => import('../views/shop/shops.vue'),
        meta: { title: '商品列表' }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});



export default router
