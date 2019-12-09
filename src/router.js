import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate.vue";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventShow.vue";
import TaskList from "./views/TaskList.vue";
import TaskShow from "./views/TaskShow.vue";
import User from "./views/User.vue";

Vue.use(Router);

import Auth from "@okta/okta-vue";

Vue.use(Auth, {
  issuer: "https://dev-463987.okta.com/oauth2/default",
  clientId: "0oa1zvvtt94xyxzDI357",
  redirectUri: "http://localhost:8080/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true
});

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/:username",
      name: "user",
      component: User
    },
    {
      path: "/task",
      name: "task-list",
      component: TaskList
    },
    {
      path: "/task/:id",
      name: "task-show",
      component: TaskShow,
      props: true
    },
    {
      path: "/implicit/callback",
      component: Auth.handleCallback()
    }
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
