<template>
  <div id="app">
    <div class="container">
      <SelectArea />
      <CurrentTime />
      <Timezones />
    </div>
  </div>
</template>

<script>
import Timezones from "./components/Timezones.vue";
import SelectArea from "./components/SelectArea.vue";
import CurrentTime from "./components/CurrentTime.vue";

export default {
  name: "App",
  components: {
    Timezones,
    SelectArea,
    CurrentTime
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
