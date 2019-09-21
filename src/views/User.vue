<template>
  <h1>Showing event # {{ $route.params.username }}</h1>
</template>

<script>
export default {
  props: ['id']
}
</script>
