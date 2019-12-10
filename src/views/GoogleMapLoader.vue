<template>
  <div>
    <div id="map" class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <map-provider :google="google" :map="map">
        <slot />
      </map-provider>
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
import MapProvider from './MapProvider'

export default {
  props: {
    mapConfig: Object,
    apiKey: String
  },
  components: {
    MapProvider
  },
  data() {
    return {
      google: null,
      map: null
    }
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
}
</script>

<style scoped>
#map {
  height: 320px;
  width: 100%;
}
</style>
