<style scoped>
.item {
  color: lightgray;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.item-actif {
  border-bottom: #dc3545 Solid 4px;
}
a:hover {
  color: white !important;
  text-decoration: none !important;
}
p {
  font-family: Berkshire Swash, sans-serif;
}
</style>

<template>
  <div>
    <div class="bg-dark">
      <div class="container justify-content-center text-center pt-4">
        <div class="row ">
          <div class="col-4 item-info ">
            <router-link class="item" to="contenu1">
              <i class="fas fa-theater-masks fa-3x"></i>

              <p>Choix Variés</p>
            </router-link>
          </div>

          <div class="col-4 item-info">
            <router-link class="item" to="contenu2">
              <i class="fas fa-money-check-alt fa-3x"></i>

              <p>Tarifs Exceptionnels</p>
            </router-link>
          </div>

          <div class="col-4 item-info item-actif">
            <router-link class="item " style="color:white" to="/">
              <i class="fas fa-images fa-3x"></i>

              <p>Gallerie</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const items_info = document.querySelectorAll(".item-info");
    items_info.forEach((item) => item.addEventListener("click", souligner));
    function souligner() {
      items_info.forEach((element) => {
        element.classList.remove("item-actif");
        element.firstChild.style.color = "lightgray";
      });
      this.classList.add("item-actif");
      this.firstChild.style.color = "white";
    }
  },
  methods: {},
};
</script>
