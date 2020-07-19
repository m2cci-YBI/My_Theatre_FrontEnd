<template>
  <nav class="navbar navbar-expand-sm navbar-dark nav-bg ">
    <div class="container">
      <a href="#" class="navbar-brand brand-font ">MyTheater</a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style>
.brand-font {
  font-family: Berkshire Swash, sans-serif;
  font-size: 1.7rem !important;
}
.navbar .nav-item.active {
  border-left: #444 3px Solid;
}

.nav-bg {
  background-color: #000;
}
</style>
