<template>
  <div>
    <div class="event-header">
      <h2 class="title">{{ task.title }}</h2>
      <h5>
        Organized by {{ task.project }} on {{ task.date }} to limit
        {{ task.limitDate }}
      </h5>
      <h5>Bounty: R${{ task.bounty }}</h5>
      <h5>Status: {{ task.status }}</h5>
      <h5>Languages: {{ task.languages }}</h5>
    </div>
    <h3>Description</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
import TaskService from "@/services/TaskService.js";
export default {
  props: ["id"],
  data() {
    return {
      task: {}
    };
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        this.task = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped>
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
