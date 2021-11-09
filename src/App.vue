<template>
  <div class="container" id="container">
    <header>
      <Navigation></Navigation>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      Vue version:
      <span v-text="version"></span>
    </footer>
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  data() {
    return {
      version: Vue.version,
    };
  },
  components: { Navigation },
  name: "App",
};
</script>
