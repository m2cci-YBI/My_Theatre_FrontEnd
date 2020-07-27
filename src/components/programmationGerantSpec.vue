<style scoped>
</style>
<template>
  <div class="col-7">
    <h4 class="py-3 text-center">{{spectacle.nom}}</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom Spectacle</th>
          <th>Date Representation</th>
          <th>DateFinReservations</th>
          <th>Taux Promotion</th>
          <th>Tickets Reservés</th>
          <th>
            <i
              class="fa fa-plus-circle"
              data-toggle="modal"
              data-target="#mymodal1"
              style="float:right; font-size: 30px;cursor:pointer"
            ></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="rep-items" v-for="r in spectacle.representations" :key="r.id">
          <td>{{r.spectacleNom}}</td>
          <td>{{r.horaire}}</td>

          <td>{{r.dateFinPrereservation}}</td>
          <td>{{r.tauxPromotion}}</td>
          <td>{{r.tickets.length}}</td>

          <td>
            <div style="visibility:hidden">
              <i
                class="fa fa-trash ml-2"
                style="float:right; font-size: 25px;cursor:pointer "
                @click="supprimerRep(r)"
              ></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" id="mymodal1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{spectacle.nom}}</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form action>
              <div class="form-group mt-4">
                <label for="date">Date Representation</label>
                <input type="datetime-local" class="form-control" v-model="dateRepresentation" />
              </div>
              <div class="form-group mt-4">
                <label for="date">Date De Fin Des Reservations</label>
                <input type="datetime-local" class="form-control" v-model="dateFinReservation" />
              </div>
              <div class="form-group">
                <label for="promotion">Taux Promotion %</label>
                <input type="number" class="form-control" v-model="tauxPromotion" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              @click=" ajouterRep(spectacle.spectacle_base_id)"
              data-dismiss="modal"
            >Valider</button>
            <button class="btn btn-danger" data-dismiss="modal">Annuler</button>
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
      dateRepresentation: "",
      dateFinReservation: "",
      tauxPromotion: "",
    };
  },
  methods: {
    formatDate(formDate) {
      return formDate.split("T").join(" ") + ":00";
    },
    trashIconAffichage() {
      const rep_items = document.querySelectorAll(".rep-items");
      rep_items.forEach((item) => item.addEventListener("mouseover", afficher));
      rep_items.forEach((item) => item.addEventListener("mouseout", masquer));

      function afficher() {
        this.lastChild.firstChild.style.visibility = "visible";
      }
      function masquer() {
        this.lastChild.firstChild.style.visibility = "hidden";
      }
    },
    ajouterRep(specid) {
      axios
        .post(
          `http://localhost:8081/representations?dateFinPrereservation=${this.formatDate(
            this.dateFinReservation
          )}&horaire=${this.formatDate(
            this.dateRepresentation
          )}&spectacleId=${specid}&tauxPromotion=${this.tauxPromotion / 100}`
        )
        .then(() => (this.$store.state.updateList = true));
    },
    supprimerRep(r) {
      if (!this.RepHasticket(r)) {
        axios
          .delete(`http://localhost:8081/representations/${r.id}`)
          .then(() => (this.$store.state.updateList = true));
      } else {
        alert(
          "Des spectateurs ont deja reservé ou acheté des tickets pour cette Representation,vous ne pouvez pas la supprimer"
        );
      }
    },
    RepHasticket(r) {
      return r.tickets.length;
    },
  },
  computed: {
    spectacle() {
      return this.$store.state.spectacle;
    },
  },

  mounted() {
    this.trashIconAffichage();
  },
  updated() {
    this.trashIconAffichage();
  },
};
</script>