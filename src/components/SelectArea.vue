<template>
  <div class="flex">
    <select @change="updateType($event)">
      <option>Please select one:</option>
      <option>Africa</option>
      <option>America</option>
      <option>Antarctica</option>
    </select>

    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectArea",
  methods: {
    ...mapActions(["updateType", "fetchTimeZones"]),
    ...mapGetters(["getType"]),

    onSubmit(e) {
      e.preventDefault();
      this.fetchTimeZones(this.getType());
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
</style>