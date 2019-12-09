<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: property.id } }"
  >
    <div class="row event-card -shadow">
      <div class="col-md-6">
        <span class="eyebrow">Bairro: {{ property.street }}</span>
        <!-- <h4 class="title">{{ property.street }}</h4> -->
        <h4 class="title">Rua: Augusto Perroni</h4>
        <BaseIcon name="users">{{ property.number }} rooms</BaseIcon>
      </div>
      <div class="col-md-6">
        <img src="../assets/imagem.jpg" id="picture"/>
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
#picture{
  width: 170px
}
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}

.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
</style>
