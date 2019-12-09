<template>
  <div>
    <h1>Task Listing</h1>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    <BaseIcon />
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";
import TaskService from "@/services/TaskService.js";

export default {
  components: {
    TaskCard
  },
  data() {
    return {
      tasks: []
    };
  },
  created() {
    TaskService.getTasks()
      .then(response => {
        this.tasks = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error);
      });
  }
};
</script>
