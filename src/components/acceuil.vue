<template>
  <div>
    <Carousel />
    <TheatreInfo />
    <router-view></router-view>
  </div>
</template>
<script>
import Carousel from "./carousel.vue";
import TheatreInfo from "./theatreInfo.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    Carousel,
    TheatreInfo,
  },
  created() {
    axios
      .get(
        `http://localhost:8081/representations?mode=&dateDebut=&dateFin=&semaine=`
      )
      .then((response) => {
        this.$store.state.representations_base = response.data;
      });
  },
};
</script>
