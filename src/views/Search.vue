<template>
  <div>
    </br>
    <h1>Aluguel rápido, online e seguro</h1>

    <v-card width="400" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field label="Cidade" prepend-icon="mdi-map" />
          <v-text-field label="Bairro" prepend-icon="mdi-map-marker-radius" />
          <v-text-field
            style="float: left;"
            label="Valor"
            prepend-icon="mdi-cash-multiple"
          />
          <v-text-field
            label="Quartos"
            v-model="searchParams.rooms"
            prepend-icon="mdi-hotel"
          />
          <v-divider></v-divider>
          <span>Referências</span>
          <div
            v-for="(reference, index) in searchParams.references"
            :key="index"
            class="row"
          >
            <div class="col-md-3">
              <v-text-field v-model="reference.latitude" label="Lat" />
            </div>
            <div class="col-md-3">
              <v-text-field v-model="reference.longitude" label="Lng" />
            </div>
            <div class="col-md-3">
              <v-text-field label="Minutes" />
            </div>
            <div class="col-md-3">
              <v-btn color="info" v-on:click="addReference">+</v-btn>
            </div>
          </div>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions id="find-div">
        <v-btn color="success" v-on:click="search">Encontrar imóveis</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data() {
    return {
      listUrl: '/list',
      showPassword: false,
      searchParams: {
        rooms: '',
        references: [{ latitude: '', longitude: '', secondsToArrive: '900', }]
      }
    }
  },
  methods: {
    ...mapActions(['fetchProperties']),
    ...mapGetters(['getProperties']),
    addReference() {
      this.searchParams.references.push({
        latitude: '',
        longitude: '',
        secondsToArrive: ''
      })
    },
    search() {
      this.$router.push({
        name: 'list',
        params: { searchParams: this.searchParams }
      })
    }
  }
}
</script>

<style>
#find-div {
  justify-content: center;
}
</style>
