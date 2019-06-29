import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue";



Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("./views/Recovery.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/Books.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/donate",
      name: "donate",
      component: () => import("./views/Donate.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("./views/Blog.vue")
    },
    {
      path: "/our-team",
      name: "our-team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue")
    },
    {
      path: "/librarian",
      name: "librarian",
      component: () => import("./views/Librarian.vue"),
      meta: { authorize: [1, 3] }
      //meta: { requiresAuth: true, libAuth: true, adminAuth: true }
    },
    {
      path: "/volunteer",
      name: "volunteer",
      component: () => import("./views/VolunteerPage.vue"),
      meta: { authorize: [1, 5] }
      //meta: { requiresAuth: true, libAuth: false, volunteerAuth: true, adminAuth: true }
    },
    {
      path: "/Books",
      name: "Books",
      component: () => import("./views/Books.vue")
    },
    {
      path: "/AddBook",
      name: "AddBook",
      component: () => import("./views/AddBook.vue"),
      meta: { authorize: [1, 3] }
      //meta: { requiresAuth: true, libAuth: true, volunteerAuth: false, adminAuth: false }
    },
    {
      path: "/BookDetails",
      name: "BookDetails",
      component: () => import("./views/BookDetails.vue")
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("./views/Users.vue"),
      meta: { authorize: [1] }
      //meta: { requiresAuth: true, adminAuth: true, libAuth: false, volunteerAuth: false }
    },
    {
      path: "/organization",
      name: "organization",
      component: () => import("./views/OrganizationMembers.vue")
      // meta: { authorize: [1] }
      //meta: { requiresAuth: true, adminAuth: true, libAuth: false, volunteerAuth: false }
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./views/NotFound.vue")
    },
    { path: "*", name: "notfound", redirect: "/404" }
  ]
});
let isFirstTransition = true;
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  let token = localStorage.getItem('loginToken');
  let userData = localStorage.getItem('loginUser') || '';
  let currentUser = {};
  if (userData !== '') {
    currentUser = JSON.parse(userData) || {};
  }


  if (authorize) {
    if (!currentUser) {
      // not logged in so redirect to login page with the return url
      return next({ path: '/login', query: { returnUrl: to.path } });
    }

    // check if route is restricted by role
    // @ts-ignore
    if (authorize.length && !authorize.includes(currentUser.role_id)) {
      // role not authorised so redirect to home page
      return next({ path: '/' });
    }
  }

  next();
})
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('loginToken');
//   let userData = localStorage.getItem('loginUser') || "";
//   if (to.meta.requiresAuth) {
//     const authUser = JSON.parse(userData);
//     if (!authUser || !token) {
//       next({ name: 'login' })
//     }
//     else if (to.meta.adminAuth) {
//       const authUser = JSON.parse(userData)
//       if (authUser.role_id === 1) {
//         next()
//       } else {
//         next('/books')
//       }
//     } else if (to.meta.volunteerAuth) {
//       const authUser = JSON.parse(userData)
//       if (authUser.role_id === 5) {
//         next()
//       } else {
//         console.log('Im in admin')
//         next('/admin')
//       }
//     } else if (to.meta.libAuth) {
//       const authUser = JSON.parse(userData)
//       console.log(authUser);
//       if (authUser.role_id === 3) {
//         next()
//       } else {
//         console.log('Im in admin')
//         next('/admin')
//       }
//     }
//   } else {
//     next()
//   }
// })
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('loginToken');
//   let userData = localStorage.getItem('loginUser');
//   if(to.meta.requiresAuth) {
//     if (token == null && userData == null) {
//       next({
//         path: '/login',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       let user = JSON.parse(userData || '{}');
//       if(to.meta.is_admin) {
//         if(user.isAdmin == true){
//             next()
//         }
//         else{
//             next({ name: ''})
//         }
//       }
//       else {
//       	next()
//       }
//     }
//   } else if(to.meta.guest) {
// 	    if(localStorage.getItem('loginToken') == null){
// 	        next()
// 	    }
// 	    else{
// 	        next({ name: '/'})
// 	    }
//     }else {
//     next() 
//   }
//   const lastRouteName = localStorage.getItem("lastRoute");

//   const shouldRedirect = Boolean(
//     to.name === "home" && lastRouteName
//     && isFirstTransition
//   );

//   if (shouldRedirect) next({ name: lastRouteName });
//   else next();
//   isFirstTransition = false;
// });
export class CurrentUser {
  public role_id!: number;
}
