<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Moov Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-content>
    </br>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        {
          label: 'Search',
          url: '/'
        },
        {
          label: 'Map',
          url: '/map'
        },
        {
          label: 'List',
          url: '/list'
        },
        {
          label: 'Create',
          url: '/create'
        }
      ]
    }
  }
}
</script>

<style scoped>
#app {
  box-sizing: border-box;
  width: 500px;
  padding: 0 20px 20px;
  margin: 0 auto;
}
</style>
