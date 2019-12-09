<template>
  <router-link
    class="event-link"
    :to="{ name: 'task-show', params: { id: task.id } }"
  >
    <div class="event-card -shadow">
      <div>
        <span class="eyebrow">{{ task.project }}</span>
        <span class="eyebrow right">{{ task.status }}</span>
      </div>

      <h4 class="title">{{ task.title }}</h4>
      <div>
        <span class="eyebrow"
          >R$: {{ task.bounty }} > {{ task.difficulty }}</span
        >
        <span class="eyebrow right">{{ task.limitDate }}</span>
      </div>
      <BaseIcon name="languages">Linguagens: {{ task.languages }}</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    task: Object
  }
};
</script>

<style scoped>
.right {
  float: right;
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
</style>
