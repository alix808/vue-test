<template>
  <div>
    <h3>{{getCurrentTime}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CurrentTime",

  methods: {
    ...mapGetters(["getCurrentTime"])
  },
  computed: mapGetters(["getCurrentTime"])
};
</script>

<style>
</style>