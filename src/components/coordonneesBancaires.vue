<template>
  <div class="container zone my-2">
    <div
      class="alert alert-success"
      role="alert"
    >Transaction effectué avec success, Vous receverez vos tickets par mail</div>
    <div class="alert alert-danger" role="alert">Transaction annulée</div>
    <div class="row">
      <div class="col-md-6 offset-3 mt-2">
        <h3>Renseigner Vos Coordonnees Bancaires</h3>

        <form action>
          <div class="form-group mt-4">
            <label for="Nom">Nom Complet</label>
            <input type="text" class="form-control" placeholder />
          </div>
          <div class="form-group">
            <label for="numero">Numero de carte</label>
            <input type="text" class="form-control" placeholder />
          </div>
          <div class="form-group">
            <label for="crypto">cryptogramme</label>
            <input type="text" class="form-control" placeholder />
          </div>
          <div class="row">
            <router-link to="/">
              <div class="btn btn-success mr-3">Valider</div>
            </router-link>
            <router-link to="/">
              <div class="btn btn-danger mr-3">Annuler</div>
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
