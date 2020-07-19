<template>
  <div>
    <Carousel />
    <TheatreInfo />
    <router-view></router-view>
    <SpectaclesAffichage />
  </div>
</template>
<script>
import Carousel from "./carousel.vue";
import TheatreInfo from "./theatreInfo.vue";
import SpectaclesAffichage from "./spectaclesAffichage.vue";
export default {
  name: "app",
  components: {
    Carousel,
    TheatreInfo,
    SpectaclesAffichage,
  },
};
</script>
