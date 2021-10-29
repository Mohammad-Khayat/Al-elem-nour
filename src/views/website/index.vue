<template>
  <div>
    <navbar></navbar>
<router-view v-slot="{ Component }">
  <transition name="router">
    <component :is="Component" />
  </transition>
</router-view>
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

.router-enter-active{

  animation: routerAnimation 1s ease-in-out;
}
.router-leave-active{
  animation: routerAnimation 1s ease-in-out reverse ;
}


@keyframes routerAnimation {
  from{
  transform: scale(0);
  opacity: 0;
  }
  to{

    transform: scale(1);
    opacity: 1;
  }
    
}

</style>