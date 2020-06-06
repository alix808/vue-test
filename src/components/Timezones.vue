<template>
  <div>
    <h3>TimeZones</h3>
    <div class="grid">
      <div v-for="item in allTimeZones" :key="item.id" class="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Timezones",
  methods: {
    ...mapActions(["fetchTimeZones"]),
    ...mapGetters(["getType"])
  },
  computed: mapGetters(["allTimeZones"]),
  created() {
    this.fetchTimeZones(this.getType());
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.item {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>