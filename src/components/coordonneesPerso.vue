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

        <form @submit.prevent>
          <div class="form-group mt-4">
            <label for="Nom">Nom</label>
            <input type="text" name id class="form-control" v-model="nom" />
          </div>
          <div class="form-group">
            <label for="Prenom">Prenom</label>
            <input type="text" name id class="form-control" v-model="prenom" />
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input type="email" name id class="form-control" v-model="email" />
          </div>
          <div class="row">
            <button class="btn btn-primary mx-3" :disabled="!reservable" @click="submit(1)">Reserver</button>

            <button class="btn btn-success mr-3" @click="submit(2)">Acheter</button>

            <button class="btn btn-danger mr-3" @click="suprimerUser()">Retour</button>
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
      nom: "",
      prenom: "",
      email: "",
    };
  },
  computed: {
    reservable() {
      return this.$store.state.representation.reservable;
    },
  },

  mounted() {
    console.log(this.reservable);
    this.user = this.$store.state.user;
    if (this.user.nom != undefined) {
      this.nom = this.user.nom;
      this.prenom = this.user.prenom;
      this.email = this.user.email;
    }
  },
  methods: {
    submit(option) {
      let userNom = this.nom;
      let userPrenom = this.prenom;
      let userEmail = this.email;
      let userId = this.user.userdId;
      let user = {
        userdId: userId,
        email: userEmail,
        nom: userNom,
        prenom: userPrenom,
        roles: "user",
      };

      axios.post("http://localhost:8081/users", user).then((response) => {
        this.$store.state.user = response.data;
        let idDossier = this.$store.state.dossierId;
        if (option === 1) {
          axios.get(
            `http://localhost:8081/ConfirmationReservation?idUser=${userId}&idDossier=${idDossier}`
          );
          this.$router.replace("/");
        } else {
          this.$router.replace("/coordonneesBancaires");
        }
      });
    },
    suprimerUser() {
      let userid = this.user.userdId;
      axios
        .delete(`http://localhost:8081/users/${userid}`)
        .then(() => this.$router.push("places"));
    },
  },
};
</script>
