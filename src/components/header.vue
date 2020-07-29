<template>
  <nav class="navbar navbar-expand-sm navbar-dark nav-bg">
    <div class="container">
      <router-link to="/" class="navbar-brand brand-font">MyTheater</router-link>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/programmation" class="nav-link">Programmation</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/panier" class="nav-link">Panier</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" @click="logout">
            <router-link to class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    const items = document.querySelectorAll(".nav-item");
    const brand_item = document.querySelector(".navbar-brand");

    brand_item.addEventListener("click", activerHome);

    items.forEach((item) => item.addEventListener("click", activer));
    function activerHome() {
      items.forEach((element) => {
        element.classList.remove("active");
      });
      items[0].classList.add("active");
    }
    function activer() {
      items.forEach((element) => {
        element.classList.remove("active");
      });
      this.classList.add("active");
    }
  },
  methods: {
    logout() {
      this.$router.replace("/");
    },
  },
};
</script>

<style>
.brand-font {
  font-family: Berkshire Swash, sans-serif;
  font-size: 1.7rem !important;
}

.navbar .nav-item {
  padding-left: 5px;
}
.navbar .nav-item.active {
  border-left: #444 3px Solid;
}

.nav-bg {
  background-color: #000;
}
</style>
