<style scoped>
</style>
<template>
  <div class="container bg-light py-5">
    <div class="col-md-6 offset-3">
      <h3>Contact</h3>
      <form @submit.prevent>
        <div class="input-group input-group-lg my-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-user"></i>
            </span>
          </div>

          <input type="text" class="form-control" v-model="nom " placeholder="Nom" />
        </div>
        <div class="input-group input-group-lg my-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-envelope"></i>
            </span>
          </div>

          <input type="text" class="form-control" v-model="email" placeholder="Email" />
        </div>
        <div class="input-group input-group-lg my-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-file"></i>
            </span>
          </div>

          <input type="text" class="form-control" v-model="objet" placeholder="Objet" />
        </div>
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </div>
          <textarea
            type="text"
            class="form-control"
            v-model="message"
            placeholder="Message"
            rows="5"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Envoyer"
          @click="enoyerMessage"
          class="btn btn-primary btn-block btn-large"
        />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      nom: "",
      email: "",
      objet: "",
      message: "",
    };
  },
  methods: {
    enoyerMessage() {
      let mail = {
        id: null,
        email: this.email,
        objet: this.objet,
        nom: this.nom,
        message: this.message,
      };
      axios
        .post("http://localhost:8081/mailier", mail)
        .then((response) => console.log(response.data));
    },
  },
};
</script>