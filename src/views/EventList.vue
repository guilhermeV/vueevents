<template>
  <div>
    <h3>Properties for {{ user.user.name }}</h3>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'list', query: { page: page - 1 } }" rel="prev"
        >Prev Page</router-link
      >|
    </template>
    <router-link :to="{ name: 'list', query: { page: page + 1 } }"
      >Next Page</router-link
    >
    <BaseIcon />
  </div>
</template>

<script>
import EventCardOld from "@/components/EventCardOld.vue";
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import store from "@/store/store.js";

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  store
    .dispatch("event/fetchEvents", {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    });
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    test: {
      type: String,
      required: false
    }
  },
  components: {
    EventCardOld,
    EventCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage;
    },
    ...mapState(["event", "user"])
  },
  created () {
    console.log(this.page)
    console.log(this.test)
  },
};
</script>
