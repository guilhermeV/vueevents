<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyCB08b33Ci4ZDF3qqh2Cwhn40PG3o02UGU"
  >
    <template slot-scope="{ google, map }">
      {{ map }}
      {{ google }}
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'

export default {
  components: {
    GoogleMapLoader
  },

  computed: {
    mapConfig() {
      return {
        zoom: 3,
        center: { lat: 0, lng: 0 }
      }
    }
  }
}
</script>
