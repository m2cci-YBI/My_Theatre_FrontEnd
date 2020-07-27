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
      <div class="col-3 bordure-droite">
        <h4 class="py-3 text-center">Spectacles</h4>
        <div>
          <div class="pl-3">
            <i
              class="fa fa-plus-circle"
              data-toggle="modal"
              data-target="#mymodal2"
              style="float:left; font-size: 30px;cursor:pointer"
            ></i>
          </div>
          <table class="table">
            <tbody>
              <tr v-for="s in spectacles" :key="s.spectacle_base_id">
                <td class="px-0 spec-items">
                  <i
                    class="fas fa-theater-masks"
                    style=" vertical-align: middle;font-size: 40px;float:left"
                  ></i>

                  <span class="btn btn-dark spectacle ml-2 mb-2">{{s.nom}}</span>
                  <div style="display:none">
                    <i
                      class="fa fa-trash ml-2"
                      @click="supprimerSpec(s.nom)"
                      style="float:right; font-size: 25px;cursor:pointer "
                    ></i>
                    <i
                      class="fa fa-edit"
                      @click="remplirForm(s)"
                      data-toggle="modal"
                      data-target="#mymodal2"
                      style="float:right; font-size: 25px;cursor:pointer"
                    ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <router-view></router-view>
      <div class="col-md-2 bordure-gauche">
        <div class="card text-center bg-primary text-white mb-3 px-0">
          <div class="card-body px-0">
            <h4>Programmation</h4>
            <h4 class="display-4">
              <i class="fas fa-cog"></i>
            </h4>
            <router-link to="/dashboard" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-success text-white mb-3">
          <div class="card-body">
            <h3>Mailer</h3>
            <h4 class="display-4">
              <i class="fas fa-envelope"></i>
            </h4>
            <router-link to="/dashboard/mailer" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-danger text-white mb-3">
          <div class="card-body">
            <h3>Statistiques</h3>
            <h4 class="display-4">
              <i class="fas fa-signal"></i>
            </h4>
            <router-link to="/dashboard/statistiques" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
      </div>
      <div class="modal" id="mymodal2">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <form @submit.prevent>
                <div class="form-group mt-4">
                  <label for="nom">Nom Spectacle</label>
                  <input type="text" class="form-control" v-model="nomSpec" />
                </div>
                <div class="form-group">
                  <label for="prix">Prix</label>
                  <input type="number" class="form-control" v-model="prixSpec" />
                </div>
                <div class="form-group">
                  <label for="prix">Presentation</label>
                  <textarea type="text" class="form-control" v-model="presentationSpec" rows="2"></textarea>
                </div>
                <div class="form-group">
                  <label for="cible">Cible</label>
                  <select class="form-control" v-model="cibleSpec">
                    <option>TOUTPUBLIC</option>
                    <option>JEUNE</option>
                    <option>ADULTE</option>
                    <option>ENFANT</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="genre">Genre</label>
                  <select class="form-control" v-model="genreSpec">
                    <option>DRAME</option>
                    <option>CIRQUE</option>
                    <option>OPERA</option>
                    <option>HUMORISTIQUE</option>
                    <option>MUSICAL</option>
                  </select>
                </div>

                <label for="zone">Zones Occupées</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone1" value="1" />
                    <label class="form-check-label" for>1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone2" value="2" />
                    <label class="form-check-label" for>2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone3" value="3" />
                    <label class="form-check-label" for>3</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone4" value="4" />
                    <label class="form-check-label" for>4</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone5" value="5" />
                    <label class="form-check-label" for>5</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input zone" type="checkbox" id="zone6" value="6" />
                    <label class="form-check-label" for>6</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-dismiss="modal" @click="ajouterSpec">Valider</button>
              <button class="btn btn-danger" data-dismiss="modal" @click="viderForm">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      spectacles: [],
      idSpec: null,
      nomSpec: "",
      prixSpec: "",
      presentationSpec: "",
      cibleSpec: "",
      genreSpec: "",
    };
  },
  created() {
    this.updateList();
  },
  computed: {
    updateListSpec() {
      return this.$store.state.updateList;
    },
  },
  watch: {
    updateListSpec() {
      axios.get(`http://localhost:8081/spectacles`).then((response) => {
        this.spectacles = response.data;

        this.$store.state.spectacle = this.spectacles.filter(
          (s) => s.nom == this.$store.state.spectacle.nom
        )[0];
        this.$store.state.updateList = false;
      });
    },
  },

  updated() {
    const spec_items = document.querySelectorAll(".spec-items");
    spec_items.forEach((item) => item.addEventListener("click", activer));
    let self = this;
    function activer() {
      spec_items.forEach((element) => {
        element.classList.remove("active");
        element.lastChild.style.display = "none";
        element.getElementsByTagName("span")[0].classList.remove("btn-warning");
        element.getElementsByTagName("span")[0].classList.add("btn-dark");
      });
      this.classList.add("active");
      this.getElementsByTagName("span")[0].classList.remove("btn-dark");
      this.getElementsByTagName("span")[0].classList.add("btn-warning");
      this.lastChild.style.display = "block";
      let nom = this.getElementsByTagName("span")[0].innerHTML;

      self.$store.state.spectacle = self.spectacles.filter(
        (s) => s.nom == nom
      )[0];

      self.$router.replace("/dashboard/spectacles");
    }
  },
  methods: {
    updateList() {
      axios.get(`http://localhost:8081/spectacles`).then((response) => {
        this.spectacles = response.data;
        console.log(this.spectacles);
      });
    },
    ajouterSpec() {
      let genre = this.genreSpec;
      let cible = {
        cible: this.cibleSpec,
        spectacles: [
          {
            spectacle_base_id: this.idSpec,

            nom: this.nomSpec,
            prixDeBase: this.prixSpec,
            description: this.presentationSpec,
            zonesDisponibles: [],
          },
        ],
      };

      document.querySelectorAll(".zone:checked").forEach((item) => {
        cible.spectacles[0].zonesDisponibles.push({ numeroZone: item.value });
      });

      axios
        .post(`http://localhost:8081/cibles?genre=${genre}`, cible)
        .then(() => this.updateList());
      this.viderForm();
    },
    supprimerSpec(nomSpec) {
      if (!this.hasticket(nomSpec)) {
        axios
          .delete(`http://localhost:8081/spectacles/${nomSpec}`)
          .then((response) => console.log(response.data));
        this.spectacles = this.spectacles.filter((s) => s.nom != nomSpec);
      } else {
        alert(
          "Des spectateurs ont deja reservé ou acheté des tickets pour ce spectacles,vous ne pouvez pas le supprimer"
        );
      }
    },
    hasticket(nomSpec) {
      return this.spectacles
        .filter((s) => s.nom == nomSpec)
        .filter(
          (s) =>
            s.representations.filter((r) => r.tickets.length > 0).length > 0
        ).length;
    },
    remplirForm(s) {
      this.idSpec = s.spectacle_base_id;
      this.nomSpec = s.nom;
      this.prixSpec = s.prixDeBase;
      this.presentationSpec = s.description;
      this.cibleSpec = s.representations[0].spectacleCible;
      this.genreSpec = s.representations[0].spectacleType;
      s.zonesDisponibles.forEach(
        (item) =>
          (document.querySelector(`#zone${item.numeroZone}`).checked = true)
      );
    },
    viderForm() {
      this.idSpec = null;
      this.nomSpec = "";
      this.prixSpec = 0;
      this.presentationSpec = "";
      this.cibleSpec = "";
      this.genreSpec = "";
      document
        .querySelectorAll(".zone:checked")
        .forEach((item) => (item.checked = false));
    },
  },
};
</script>
