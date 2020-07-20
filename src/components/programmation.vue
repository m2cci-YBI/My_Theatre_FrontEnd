<style scoped>
.programmation {
  min-height: 76.5vh;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.filtre-modal {
  background: gold;
  padding: 5px 5px;
  margin: 5px 5px 0px 0px;
  border-radius: 20px;
  color: dark;
  display: inline-block;
}
</style>
<template>
  <div class="container programmation">
    <div class="row my-3">
      <div class="col-md-2">
        <h3>Filtres</h3>
        <h5 class="mt-5">Par Genre</h5>
        <Filtre name="Comedy" />
        <Filtre name="Drame" />
        <Filtre name="Musical" />
        <h5 class="mt-5">Par Cible</h5>
        <Filtre name="ToutPublic" />
        <Filtre name="Adulte" />
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col">
            <form class="form-inline">
              <div class="input-group">
                <label for="debut" class="mx-2">DateDebut</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="DateDebut"
                />
              </div>
              <div class="input-group">
                <label for="debut" class="mx-2">DateFin</label>
                <input type="date" class="form-control" placeholder="DateFin" />
              </div>
              <div class="input-group">
                <button type="submit" class="btn btn-primary mx-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-search"></i
                ></span>
              </div>
              <input class="form-control" type="text" placeholder="Spectacle" />
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-12">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Date</th>
                  <th>Places Disponibles</th>
                  <th>Taux Reductions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harry Potter</td>
                  <td>une date</td>
                  <td>50</td>
                  <td>20 %</td>
                  <td>
                    <button
                      type="submit"
                      class="btn btn-primary mx-2"
                      data-toggle="modal"
                      data-target="#mymodal"
                    >
                      Consulter
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="mymodal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Harry Potter</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <img src="../assets/harryPotter.jpg" alt="" />
              </div>
              <div class="col-8">
                <div>
                  Cet été est horrible ! Les Dursley découvrent que Harry n'a
                  pas le droit de faire de la magie pendant les vacances et
                  l'enferment dans sa chambre, en ne le laissant sortir que pour
                  faire sa toilette, afin qu'il ne retourne jamais à Poudlard.
                  Heureusement, les incorrigibles frères Weasley décident
                  d'agir...
                </div>
                <div>
                  <span class="filtre-modal">Musical</span>
                  <span class="filtre-modal">ToutPublic</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" data-dismiss="modal">
              Retour
            </button>
            <router-link to="/places">
              <button class="btn btn-primary" data-dismiss="modal">
                Reserver Places
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Filtre from "./filtre.vue";
export default {
  components: {
    Filtre,
  },
};
</script>
