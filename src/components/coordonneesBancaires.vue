<template>
  <div class="container zone my-2">
    <!-- <div
      class="alert alert-success"
      role="alert"
    >Transaction effectué avec success, Vous receverez vos tickets par mail</div>
    <div class="alert alert-danger" role="alert">Transaction annulée</div>-->
    <div class="row">
      <div class="col-md-6 offset-3 mt-2">
        <h3>Renseigner Vos Coordonnées Bancaires</h3>

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
            <div class="btn btn-success mr-3" @click="ajouterDateTickets">Valider</div>

            <div class="btn btn-danger mr-3" @click="retour">Annuler</div>
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
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let userId = this.$store.state.user.userdId;
    axios.get(`http://localhost:8081/users/${userId}`).then((response) => {
      this.user = response.data;
      this.$store.state.user = this.user;
    });
  },
  methods: {
    ajouterDateTickets() {
      let userId = this.$store.state.user.userdId;
      let dossierId = this.$store.state.dossierId;
      let dossierAchat = this.user.dossiersAchat.filter(
        (d) => d.dossierAchatId == dossierId
      )[0];
      let idTickets = dossierAchat.tickets.map((t) => t.idTicket);

      axios
        .post("http://localhost:8081/tickets/update", idTickets)
        .then((response) => {
          console.log(response.data);
          axios.get(
            `http://localhost:8081/ConfirmationAchat?idUser=${userId}&idDossier=${dossierId}`
          );
          this.$router.push("/");
        });
    },
    retour() {
      if (this.$store.state.auth) {
        this.$router.push("panier");
      } else {
        this.$router.push("coordonneesPerso");
      }
    },
  },
};
</script>
