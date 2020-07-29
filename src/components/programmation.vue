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
  <div class="container programmation bg-light">
    <div class="row my-3">
      <div class="col-md-2">
        <h3>Filtres</h3>
        <h5 class="mt-5">Par Genre</h5>

        <Filtre name="DRAME" type="genre" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="CIRQUE" type="genre" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="MUSICAL" type="genre" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="HUMORISTIQUE" type="genre" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="OPERA" type="genre" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <h5 class="mt-5">Par Cible</h5>
        <Filtre name="TOUTPUBLIC" type="cible" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="ADULTE" type="cible" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="JEUNE" type="cible" :etat="etatFiltres" @check-filtre="checkFiltre" />
        <Filtre name="ENFANT" type="cible" :etat="etatFiltres" @check-filtre="checkFiltre" />
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col">
            <form class="form-inline" @submit.prevent="onSubmit($event)">
              <div class="input-group">
                <label for="debut" class="mx-2">DateDebut</label>
                <input type="date" class="form-control" placeholder="dateDebut" />
              </div>
              <div class="input-group">
                <label for="debut" class="mx-2">DateFin</label>
                <input type="date" class="form-control" placeholder="dateFin" />
              </div>
              <div class="input-group">
                <button type="submit" class="btn btn-primary mx-2">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-search"></i>
                </span>
              </div>
              <input
                class="form-control"
                @keyup="filtrerNom($event)"
                id="filtreNomSpec"
                type="text"
                placeholder="Spectacle"
              />
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
                  <th>Genre</th>
                  <th>Cible</th>
                  <th>PrixDeBase</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in representations_base" :key="r.id">
                  <td>{{r.spectacleNom}}</td>
                  <td>{{r.horaire}}</td>
                  <td>{{getPlacesdisponibles(r.id)}}</td>
                  <td>{{r.tauxPromotion*100}} %</td>
                  <td>{{r.spectacleType}}</td>
                  <td>{{r.spectacleCible}}</td>
                  <td>{{r.spectaclePrix}} €</td>
                  <td>
                    <button
                      type="submit"
                      class="btn btn-primary mx-2"
                      data-toggle="modal"
                      data-target="#mymodal"
                      @click="passerInfo(r)"
                    >Consulter</button>
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
            <h5 class="modal-title">{{modalTitre}}</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <img src="../assets/harryPotter.jpg" alt />
              </div>
              <div class="col-8">
                <div>{{modalDescription}}</div>
                <div>pré-reservation :{{modalPrereservation? "Possible":"Expiré"}}</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" data-dismiss="modal">Retour</button>
            <router-link to="/places">
              <button class="btn btn-primary" data-dismiss="modal">Reserver Places</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Filtre from "./filtre.vue";
import axios from "axios";
export default {
  components: {
    Filtre,
  },
  data() {
    return {
      representations_base: [],
      representations_view: [],
      genre: [],
      cible: [],
      etatFiltres: false,
      modalTitre: "",
      modalDescription: "",
      modalPrereservation: Boolean,
    };
  },
  mounted() {
    axios.get(`http://localhost:8081/representations_view`).then((response) => {
      this.representations_view = response.data;
      axios
        .get(
          `http://localhost:8081/representations?mode=&dateDebut=&dateFin=&semaine=`
        )
        .then((response) => {
          this.$store.state.representations_base = response.data;
          this.representations_base = this.$store.state.representations_base;
          console.log(this.representations_base);
        });
    });
  },
  methods: {
    onSubmit($event) {
      let dateDebut = $event.target[0].value;
      let dateFin = $event.target[1].value;
      axios
        .get(
          `http://localhost:8081/representations?mode=entre&dateDebut=${dateDebut}T00:00:00&dateFin=${dateFin}T00:00:00&semaine=`
        )
        .then((response) => {
          this.$store.state.representations_base = response.data;
          this.representations_base = this.$store.state.representations_base;
        });

      this.$store.state.desactiveFiltres = !this.$store.state.desactiveFiltres;
      this.genre = [];
      this.cible = [];

      document.querySelector("#filtreNomSpec").value = "";
    },
    getPlacesdisponibles(id) {
      return this.representations_view.filter((item) => item.id == id)[0]
        .places_disponibles;
    },
    filtrerNom($event) {
      if ($event.target.value != "") {
        this.representations_base = this.$store.state.representations_base.filter(
          (item) => item.spectacleNom.startsWith($event.target.value)
        );
      } else {
        this.representations_base = this.$store.state.representations_base;
      }
    },
    passerInfo(r) {
      this.modalTitre = r.spectacleNom;
      this.modalDescription = r.spectacleDescription;
      this.modalPrereservation = r.reservable;
      this.$store.state.representation = r;
    },
    checkFiltre(type, nom, etat) {
      if (etat) {
        this[type].push(nom);
      } else {
        let index = this[type].indexOf(nom);
        this[type].splice(index, 1);
      }

      this.representations_base = this.$store.state.representations_base.filter(
        (rep) =>
          (this.genre.length ? this.genre.includes(rep.spectacleType) : true) &&
          (this.cible.length ? this.cible.includes(rep.spectacleCible) : true)
      );
    },
  },
};
</script>
