<template>
  <div>
    <h1>Aluguel rápido, online e seguro</h1>

    <v-card width="400" class="mx-auto mt-5">
      <v-card-text>
        <v-form>
          <v-text-field label="Cidade" prepend-icon="mdi-account-circle" />
          <v-text-field label="Bairro" prepend-icon="mdi-lock" />
          <div>
            <v-text-field
              style="float: left;"
              label="Valor"
              prepend-icon="mdi-lock"
            />
            <v-text-field label="Quartos" v-model="searchParams.rooms" prepend-icon="mdi-lock" />
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
import propertyService from '@/services/PropertyService'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data() {
    return {
      listUrl: '/list',
      showPassword: false,
      searchParams: {
        rooms: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchProperties']),
    ...mapGetters(['getProperties']),
    search() {
      console.log(this.searchParams.rooms)
      this.$router.push({name: 'list', params: {searchParams: this.searchParams}})
    }
  }
}
</script>

<style>
#find-div {
  justify-content: center;
}
</style>
