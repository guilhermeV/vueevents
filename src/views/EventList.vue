<template>
  <div>
    <h3>Properties for</h3>
    <EventCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
    />

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
import EventCard from '@/components/EventCard.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import store from '@/store/store.js'
import PropertyService from '@/services/PropertyService'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('event/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  data() {
    return {
      properties: []
    }
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    searchParams: {
      type: Object,
      required: true
    }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  methods: {
    ...mapGetters(['getProperties']),
    ...mapActions(['fetchProperties'])
  },
  created() {
    const outsidePoint = {
      latitude: -30.0,
      longitude: -30.0,
      secondsToArrive: 900
    }
    const insidePoint = {
      latitude: -23.573814,
      longitude: -46.731789,
      secondsToArrive: 900
    }

    this.searchParams.references = [insidePoint]
    PropertyService.getFilteredProperties(this.searchParams.references).then(
      response => {
        this.properties = response.data
      }
    )
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    }
  }
}
</script>
