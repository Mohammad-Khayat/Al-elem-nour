<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {
      imgPath: null,
    };
  },
  methods: {
 
  },
  components: {
    Navbar,
  },
 
};
</script>

<style>
</style>