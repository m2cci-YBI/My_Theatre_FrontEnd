
<style scoped>
.dashboard {
  min-height: 76.5vh;
}
.colonne {
  border: black 2px solid;
  height: 70vh;
  width: 100%;
  border-radius: 20px;
}

.bordure-droite {
  border-right: 1px black dashed;
}
.bordure-gauche {
  border-left: 1px black dashed;
}
.spectacle {
  border-radius: 40px;
  font-size: 1rem;
  font-weight: bold;
  margin: 0px;
}
.active {
  color: #ffc107;
}
</style>
<template>
  <div class="container-fluid bg-light dashboard my-3">
    <div class="row justify-content-center">
      <router-view></router-view>

      <div class="col-md-2 bordure-gauche">
        <div class="card text-center bg-success text-white mb-3">
          <div class="card-body">
            <h3>Mailer</h3>
            <h4 class="display-4">
              <i class="fas fa-envelope"></i>
            </h4>
            <router-link to="/dashboard/mailer" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-primary text-white mb-3 px-0">
          <div class="card-body px-0">
            <h4>Programmation</h4>
            <h4 class="display-4">
              <i class="fas fa-eye"></i>
            </h4>
            <router-link to="/dashboard" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-danger text-white mb-3">
          <div class="card-body">
            <h4>Configuration</h4>
            <h4 class="display-4">
              <i class="fas fa-cog"></i>
            </h4>
            <router-link to="/dashboard/configuration" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>