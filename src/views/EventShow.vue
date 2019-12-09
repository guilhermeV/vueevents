<template>
  <div>
    <div class="event-header">
      <span class="eyebrow"
        >@{{ property.time }} on {{ property.date | date }}</span
      >
      <h1 class="title">{{ property.title }}</h1>
      <h5>Organized by {{ property.organizer ? property.organizer : '' }}</h5>
      <h5>Category: {{ property.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address>{{ property.location }}</address>
    <h2>Event details</h2>
    <p>{{ property.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ property.attendees ? property.attendees : 0 }}
      </span>
    </h2>
    <!-- <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: {
        time: 'time',
        date: 'date',
        title: 'title',
        organizer: 'organizer',
        category: 'categoria',
        attendees: '2'
      } 
    }
  },
  props: {
    // event: {
    //   type: Object,
    //   required: true
    // }
  }
}
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
