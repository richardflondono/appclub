import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewUser from '@/components/NewUser'
import ViewUser from '@/components/ViewUser'
import EditUser from '@/components/EditUser'
import AdminHome from '@/components/AdminHome'
import LoginUser from '@/components/AppLogin'
import UserHome from '@/components/UserHome'
import firebase from 'firebase'

Vue.use(Router)

 let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
          meta: {
          requiresAuth: true
          }
      },
    {
      path: '/login',
      name: 'login-user',
      component: LoginUser,
      meta: {
      requiresGuest: true
      }
    },
    {
      path: '/new',
      name: 'new-user',
      component: NewUser,
      meta: {
          requiresAuth: true
          }
    },
    {
      path: '/edit/:user_id',
      name: 'edit-user',
      component: EditUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:user_id',
      name: 'view-user',
      component: ViewUser,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

  router.beforeEach((to, from, next) => {
      //check  for  requiresAuth
        if (to.matched.some(record => record.meta.requiresAuth)) {
          //check if is not logged in 
              if (!firebase.auth().currentUser) {
                  //go to login 
                    next({
                      path: '/login',
                      query: {
                      redirect: to.fullPath
                      }
              });
    }else {
        //preoced to the road 
          next();
      }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
      //check if is logged in 
        if (firebase.auth().currentUser) {
            //go to login 
              next({
                path: '/',
                query: {
                redirect: to.fullPath
                  }
        });
    } else {
        //preoced to the road 
          next();
      }
  }else {
      next();
    }
});

export default router;