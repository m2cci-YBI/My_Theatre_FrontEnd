<style scoped>
.zone {
  min-height: 76.5vh;
}
.total {
  font-size: 1.7rem;
}
</style>
<template>
  <div class="zone bg-light">
    <div class="container my-3" v-if="this.user.userdId != null">
      <div class="row" v-for="d in user.dossiersAchat" :key="d.dossierAchatId">
        <div class="container">
          <h4>
            <span class="mr-2">{{idRepToNomSpec(d.tickets[0].representationId)}}</span>
            <span>{{idRepToDate(d.tickets[0].representationId)}}</span>
          </h4>
          <div class="row">
            <table class="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Rang</th>
                  <th>Place</th>
                  <th>prix</th>
                  <th>Profil</th>
                  <th>Etat</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="t in d.tickets" :key="t.idTicket">
                  <td>{{t.placeId.split("_")[0]}}</td>
                  <td>{{t.placeId.split("_")[1]}}</td>
                  <td>{{t.prixTicket.toFixed(2)}}</td>
                  <td>{{t.profilSpectateur}}</td>
                  <td>{{t.estAchatee? "Acheté":"Réservé"}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row mb-2">
            <button
              type="submit"
              class="btn btn-primary mx-2"
              @click="payer(d.dossierAchatId)"
              :disabled="d.tickets[0].estAchatee"
            >Payer</button>
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
      user: {},
    };
  },
  created() {
    this.user = this.$store.state.user;

    if (this.user.userdId != null) {
      this.user.dossiersAchat.forEach((element) => {
        axios
          .get(`http://localhost:8081/TicketsPrix/${element.dossierAchatId}`)
          .then((response) => {
            element.tickets = response.data;
          });
        setTimeout(console.log("jattends la reponse serveur"), 1000);
      });
    }
    console.log(this.user);
  },
  methods: {
    idRepToDate(idRep) {
      return this.$store.state.representations_base.filter(
        (r) => r.id == idRep
      )[0].horaire;
    },
    idRepToNomSpec(idRep) {
      return this.$store.state.representations_base.filter(
        (r) => r.id == idRep
      )[0].spectacleNom;
    },
    payer(dossierId) {
      this.$store.state.dossierId = dossierId;
      this.$router.replace("/coordonneesBancaires");
    },
  },
};
</script>