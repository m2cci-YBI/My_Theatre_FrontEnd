<template>
  <div class="container bg-light zone my-2">
    <div class="alert alert-danger" role="alert">Vos identifiants sont erronés</div>
    <div class="row">
      <div class="col-md-6 offset-3 mt-2">
        <h3>Login</h3>

        <form @submit.prevent>
          <div class="form-group mt-4">
            <label for="email">Email</label>
            <input type="text" class="form-control" v-model="username" />
          </div>
          <div class="form-group">
            <label for="password">Mot De Passe</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

          <div class="row">
            <div class="btn btn-primary mx-3" @click="onSubmit()">Login</div>

            <router-link to="/">
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
import VueJwtDecode from "vue-jwt-decode";

import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("vuex");
    this.$store.state.auth = false;
    this.$store.state.roles = [];
    this.$store.state.isAdmin = false;
  },
  methods: {
    checkRoles() {
      let roles = this.$store.state.roles;

      for (let r of roles) {
        if (r.authority == "admin") {
          this.$store.state.isAdmin = true;

          return;
        }
      }
      this.$store.state.isAdmin = false;
    },
    onSubmit() {
      const formData = {
        username: this.username,
        password: this.password,
      };
      axios.post("http://localhost:8081/login", formData).then((response) => {
        let jwtToken = response.headers.authorization;
        localStorage.setItem("jwtToken", jwtToken);

        let jwtTokenModified = jwtToken.slice(
          jwtToken.indexOf(" ") + 1,
          jwtToken.length
        );

        let decodedJwt = VueJwtDecode.decode(jwtTokenModified);
        console.log(decodedJwt);
        this.$store.state.roles = decodedJwt.authorities;

        this.$store.state.auth = true;

        this.checkRoles();
        if (this.$store.state.isAdmin) {
          this.$router.push("dashboard");
        } else {
          axios
            .get(`http://localhost:8081/users/${parseInt(decodedJwt.sub)}`)
            .then((response) => {
              this.$store.state.user = response.data;
              this.$router.push("panier");
            });
        }
      });
    },
  },
};
</script>
