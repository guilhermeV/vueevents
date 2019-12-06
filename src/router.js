import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate.vue";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventShow.vue";
import User from "./views/User.vue";
import NProgress from "nprogress";
import store from "@/store/store.js";
import NotFound from "./views/NotFound.vue";
import NetworkIssue from "./views/NetworkIssue.vue";
import Example from "./views/Example.vue";
import Search from "./views/Search.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "search",
      component: Search,
      props: true
    },
    {
      path: "/list",
      name: "list",
      component: EventList,
      props: true
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch("event/fetchEvent", routeTo.params.id)
          .then(event => {
            routeTo.params.event = event;
            next();
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: "404", params: { resource: "event" } });
            } else {
              next({ name: "network-issue" });
            }
          });
      }
    },
    {
      path: "/example",
      component: Example
    },
    {
      path: "/create",
      name: "create",
      component: EventCreate
    },
    {
      path: "/user/:username",
      name: "user",
      component: User
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      props: true
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: NetworkIssue
    },
    {
      path: "*",
      redirect: { name: "404", params: { resource: "page" } }
    }
  ]
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
