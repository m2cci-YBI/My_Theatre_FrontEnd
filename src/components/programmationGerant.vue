<template>
  <div class="col-md-7">
    <div class="row my-2">
      <form class="form-inline mx-auto" @submit.prevent="onSubmit">
        <div class="input-group">
          <input type="week" class="form-control" v-model="week " />
        </div>
        <div class="input-group">
          <button type="submit" class="btn btn-primary mx-2">Submit</button>
        </div>
      </form>
    </div>
    <div class="row">
      <table class="table table-striped mx-3">
        <thead>
          <tr>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      representations: [],
      week: "",
    };
  },
  mounted() {
    axios
      .get(
        `http://localhost:8081/representations?mode=&dateDebut=&dateFin=&semaine=`
      )
      .then((response) => (this.representations = response.data))
      .catch();
  },
  methods: {
    onSubmit() {
      axios
        .get(
          `http://localhost:8081/spectacles?mode=semaine&dateDebut=&dateFin=&semaine=${this.week}`
        )
        .then((response) => (this.spectacles = response.data))
        .catch();
    },
  },
};
</script>