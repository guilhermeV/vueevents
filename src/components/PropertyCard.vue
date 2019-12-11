<template>
  <router-link
    class="property-link"
    :to="{ name: 'property-show', params: { id: property.id } }"
  >
    <div class="row property-card -shadow">
      <div class="col-md-6">
        <span class="eyebrow">Bairro: {{ property.street }}</span>
        <!-- <h4 class="title">{{ property.street }}</h4> -->
        <h4 class="title">Rua: {{ property.number }}</h4>
        <BaseIcon name="users">2 rooms</BaseIcon>
        <div>
          <span>Valor: R$ 3.000</span>
        </div>
        <v-divider></v-divider>
        <div class="row">
          <div
            class="col-md-6"
            v-for="(time, index) in property.secondsToArrive2"
            :key="index"
          >
            <v-chip class="ma-2" color="green" text-color="white">
              <v-avatar left class="green darken-4">
                {{ time || 'X' }}
              </v-avatar>
              min
            </v-chip>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/imagem.jpg" id="picture" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    property: Object
  }
}
</script>

<style scoped>
#picture {
  width: 170px;
}
.property-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.property-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.property-card > .title {
  margin: 0;
}
.property-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
</style>
