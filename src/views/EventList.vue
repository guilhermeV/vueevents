<template>
  <div>
    <v-btn v-on:click="loadDistances">Carregar Distância</v-btn>
    </br>
    </br>
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
      type: Object
      // required: true
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
    ...mapActions(['fetchProperties']),
    loadDistances() {
       
    }
  },
  async created() {
    // const outsidePoint = {
    //   latitude: -30.0,
    //   longitude: -30.0,
    //   secondsToArrive: 900
    // }
    // const insidePoint = {
    //   latitude: -23.573814,
    //   longitude: -46.731789,
    //   secondsToArrive: 900
    // }

    if (!this.searchParams || !this.searchParams.references[0].latitude) {
      this.properties = (await PropertyService.getAllProperties()).data
    } else {
      // this.searchParams.references = [insidePoint]
      PropertyService.getFilteredProperties(this.searchParams.references).then(
        response => {
          this.properties = response.data
          const propertLocation = {latitude: this.properties[0].location.coordinates[0], longitude: this.properties[0].location.coordinates[1], secondsToArrive: 0}

          this.searchParams.references.forEach(reference => {
            const distancePost = [propertLocation,reference]

            PropertyService.getDistanceProperties(distancePost).then(result => {
              this.properties.forEach(function (value, i) {
                const time = result.data[i+1].secondsToArrive/60
                value.secondsToArrive = (time+"").split('.')[0]
                if(!value.secondsToArrive2){
                  value.secondsToArrive2 = []
                  value.secondsToArrive2.push((time+"").split('.')[0])
                } else {
                  value.secondsToArrive2.push((time+"").split('.')[0])                 
                }
                value.id = value.id+1
                value.id = value.id-1
              })
            })  

            console.log()

          })

          // const distancePost = [propertLocation,this.searchParams.references[0]]

          // PropertyService.getDistanceProperties(distancePost).then(result => {
          //   this.properties.forEach(function (value, i) {
          //     const time = result.data[i+1].secondsToArrive/60
          //     value.secondsToArrive = (time+"").split('.')[0]
          //     value.id = value.id+1
          //     value.id = value.id-1
          //   })
          // })
        }
      )
    }
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    }
  }
}
</script>
