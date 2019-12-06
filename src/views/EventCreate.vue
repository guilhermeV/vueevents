<template>
  <div>
    <form @submit.prevent="createEvent">
      <h3>Describe your property</h3>
      <BaseInput
        label="District"
        v-model="event.title"
        type="text"
        placeholder="Disctrict"
        class="field"
        :class="{error: $v.event.title.$error}"
        @blur="$v.event.title.$touch()"
      />

      <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required" class="errorMessage">Title is required.</p>
      </template>

      <BaseInput
        label="Street"
        v-model="event.description"
        type="text"
        placeholder="Street"
        class="field"
        :class="{error: $v.event.description.$error}"
        @blur="$v.event.description.$touch()"
      />
      <template v-if="$v.event.description.$error">
        <p v-if="!$v.event.description.required" class="errorMessage">Description is required.</p>
      </template>

      <h4>Where is your property?</h4>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
        :class="{error: $v.event.location.$error}"
        @blur="$v.event.location.$touch()"
      />
      <template v-if="$v.event.location.$error">
        <p v-if="!$v.event.location.required" class="errorMessage">Location is required.</p>
      </template>

      <h4>When would it be available?</h4>
      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          :input-class="{error: $v.event.date.$error}"
          @opened="$v.event.date.$touch()"
        />
      </div>
      <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required" class="errorMessage">Date is required.</p>
      </template>

      <BaseButton type="submit" buttonClass="-fill-gradient" :disabled="$v.$anyError">Submit</BaseButton>
      <p v-if="$v.$anyError" class="errorMessage">Please fill out the required field(s).</p>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";
import { required } from "vuelidate/lib/validators";

export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories
    };
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        NProgress.start();
        this.$store
          .dispatch("event/createEvent", this.event)
          .then(() => {
            this.$router.push({
              name: "event-show",
              params: { id: this.event.id }
            });
            this.event = this.createFreshEvent();
          })
          .catch(() => {
            NProgress.done();
          });
      }
    },
    createFreshEvent() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>