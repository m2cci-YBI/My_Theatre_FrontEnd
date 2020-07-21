<template>
  <div class="container bg-light zone my-2">
    <div class="alert alert-danger" role="alert">Vos identifiants sont erronés</div>
    <div class="row">
      <div class="col-md-6 offset-3 mt-2">
        <h3>Login</h3>

        <form action>
          <div class="form-group mt-4">
            <label for="email">Email</label>
            <input type="text" class="form-control" placeholder />
          </div>
          <div class="form-group">
            <label for="password">Mot De Passe</label>
            <input type="password" class="form-control" placeholder />
          </div>

          <div class="row">
            <router-link to="panier">
              <div class="btn btn-primary mx-3">Login</div>
            </router-link>

            <router-link to="/">
              <div class="btn btn-danger mr-3">Retour</div>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zone {
  min-height: 76.5vh;
}
</style>
<script>
export default {};
</script>
