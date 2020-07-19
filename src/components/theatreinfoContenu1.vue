<style scoped>
* {
  font-family: Verdana, sans-serif;
  background-color: lightgoldenrodyellow;
}
</style>
<template>
  <div class="container-fluid pt-5 " style="overflow:hidden">
    <div class="col-md-6 ">
      <vue-word-cloud
        style="      
    height: 400px;
    width: 100vw;
  "
        :words="[
          ['Romance', 21],
          ['Humour', 25],
          ['Fantasy', 19],
          ['Drame', 21],
          ['Cirque', 25],
          ['Opera', 19],
          ['Musical', 27],
          ['Tragedie', 27],
          ['Historique', 21],
        ]"
        :color="
          ([, weight]) =>
            weight > 26
              ? '#E96E41'
              : weight > 22
              ? '#36763B'
              : weight > 20
              ? '#62140E'
              : '#564FE3'
        "
        :rotation-unit="([, weight]) => (weight > 0 ? 'deg' : 'rad')"
        :rotation="
          ([, weight]) =>
            weight > 26 ? '-90' : weight > 22 ? '-45' : weight > 20 ? '35' : '0'
        "
        font-family="Berkshire Swash"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
