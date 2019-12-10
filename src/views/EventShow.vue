<template>
  <div>
    <div class="event-header">
      <img src="../assets/imagem.jpg" id="picture" />
      <v-card class="card">
      <h3>Bairro: {{ property.district }}</h3>
      <h4>Rua: {{ property.street }}</h4>
      <v-chip>Valor: {{ property.price }}</v-chip>
      <v-chip
      class="ma-2"
      color="green"
      text-color="white"
    >
      <v-avatar
        left
        class="green darken-4"
      >
        {{ property.rooms }}
      </v-avatar>
      Rooms
    </v-chip>
      </v-card>
    </div>
    </br>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <div>
      <GoogleMapLoader :mapConfig="mapConfig" apiKey="AIzaSyCB08b33Ci4ZDF3qqh2Cwhn40PG3o02UGU"></GoogleMapLoader>
    </div>
    </br>
    <v-card class="card">
    <h2>Property details</h2>
    <v-chip
      class="ma-2"
      color="info"
      text-color="white"
    >
      <v-avatar left>
        <v-icon>mdi-paw</v-icon>
      </v-avatar>
      Aceita Pet
    </v-chip>
    <v-chip
      class="ma-2"
      color="info"
      text-color="white"
    >
      <v-avatar left>
        <v-icon>mdi-dumbbell</v-icon>
      </v-avatar>
      Academia
    </v-chip>
    <v-chip
      class="ma-2"
      color="info"
      text-color="white"
    >
      <v-avatar left>
        <v-icon>mdi-spray-bottle</v-icon>
      </v-avatar>
      Lavanderia
    </v-chip>
    </v-card>
  </div>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'

export default {
  components: {
    GoogleMapLoader
  },
  data() {
    return {
      property: {
        time: 'time',
        date: 'date',
        title: 'title',
        organizer: 'organizer',
        category: 'categoria',
        attendees: '2',
        street: 'Augusto Perroni',
        district: 'Butantã',
        price: 'R$ 3000',
        rooms: 2,
        latitude: -23.573588,
        longitude: -46.724252
      }
    }
  },
  props: {
    // event: {
    //   type: Object,
    //   required: true
    // }
  },
  computed: {
    mapConfig() {
      return {
        zoom: 15,
        center: { lat: this.property.latitude, lng: this.property.longitude }
      }
    }
  }
}
</script>

<style scoped>
#picture {
  width: 460px;
}
.card {
  padding: 15px;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
