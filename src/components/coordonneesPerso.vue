<template>
  <div class="container zone my-2">
    <div class="alert alert-success" role="alert">
      Votre demande a été realisé avec success, vous receverez un mail de
      confirmation votre commande
    </div>
    <div class="alert alert-danger" role="alert">Votre commande a été annulé</div>
    <div class="row">
      <div class="col-md-6 offset-3 mt-2">
        <h3>Renseigner Vos Coordonnees Personnelles</h3>

        <form action>
          <div class="form-group mt-4">
            <label for="Nom">Nom</label>
            <input type="text" name id class="form-control" placeholder />
          </div>
          <div class="form-group">
            <label for="Prenom">Prenom</label>
            <input type="text" name id class="form-control" placeholder />
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input type="email" name id class="form-control" placeholder />
          </div>
          <div class="row">
            <router-link to>
              <div class="btn btn-primary mx-3">Reserver</div>
            </router-link>
            <router-link to="/coordonneesBancaires">
              <div class="btn btn-success mr-3">Acheter</div>
            </router-link>
            <router-link to="/places">
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
