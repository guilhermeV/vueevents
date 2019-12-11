<template>
  <div>
    <h1>Uh-Oh!</h1>
    <h3>
      It looks you're experiencing some network issues, please click the back
      button and try again.
    </h3>
    <router-link :to="{ name: 'list' }"
      >Or go back to the property list</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
