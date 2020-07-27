<style scoped>
.zone {
  min-height: 76.5vh;
}
.total {
  font-size: 1.7rem;
}
</style>
<template>
  <div class="container zone bg-light">
    <div class="row">
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nom Spectacle</th>
            <th>Date Representation</th>
            <th>Rang</th>
            <th>Place</th>
            <th>prix</th>
            <th>Profil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in tickets" :key="t.idTicket">
            <td>{{idRepToNomSpec(t.representationId)}}</td>
            <td>{{idRepToDate(t.representationId)}}</td>
            <td>{{t.placeId.split("_")[0]}}</td>
            <td>{{t.placeId.split("_")[0]}}</td>
            <td>{{t.prixTicket}}</td>
            <td>{{t.profilSpectateur}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <router-link to="/coordonneesBancaires">
        <button type="submit" class="btn btn-primary mx-2">Payer</button>
      </router-link>
      <router-link to="/">
        <button type="submit" class="btn btn-danger mx-2">Home</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      tickets: [],
    };
  },
  mounted() {
    this.user = this.$store.state.user;
    console.log(this.user);
    let idDossier = this.user.dossiersAchat[0].dossierAchatId;

    axios
      .get(`http://localhost:8081/TicketsPrix/${idDossier}`)
      .then((response) => {
        (this.tickets = response.data), console.log(this.tickets);
      });
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
  },
};
</script>