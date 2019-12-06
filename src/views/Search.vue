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
            <v-text-field label="Quartos" prepend-icon="mdi-lock" />
          </div>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions id="find-div">

        <router-link :to="{ name: 'list', params: {test: 'batata' } }">

          <v-btn color="success">Encontrar imóveis</v-btn>

        </router-link>

        
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      listUrl: '/list',
      showPassword: false
    }
  }
}
</script>

<style>
#find-div {
  justify-content: center;
}
</style>
