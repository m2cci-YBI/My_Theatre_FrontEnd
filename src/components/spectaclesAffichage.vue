<style scoped>
* {
  margin: 0px;
  color: white;
}
h2 {
  font-family: Berkshire Swash, sans-serif;
}
</style>

<template>
  <div class="container-fluid bg-dark pb-5 pt-2 text-center">
    <h2 class="py-3">Promotions de la Semaine</h2>
    <div class="row ">
      <div class="col-4">
        <SpectacleCard titre="harryPotter" />
      </div>
      <div class="col-4">
        <SpectacleCard titre="leCid" />
      </div>
      <div class="col-4">
        <SpectacleCard titre="harryPotter" />
      </div>
    </div>
  </div>
</template>

<script>
import SpectacleCard from "./spectacleCard.vue";
export default {
  components: {
    SpectacleCard,
  },
};
</script>
