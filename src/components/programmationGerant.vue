<style scoped>
.programmation {
  box-sizing: border-box;
  width: calc(100% / 7);
}
</style>

<template>
  <div class="col-md-10">
    <div class="row my-2">
      <form class="form-inline mx-auto" @submit.prevent>
        <div class="input-group">
          <input type="week" class="form-control" v-model="week " />
        </div>
        <div class="input-group">
          <button @click="onSubmit" class="btn btn-primary mx-2">Submit</button>
        </div>
      </form>
    </div>
    <div class="container mx-3 my-3 pt-4">
      <div class="row">
        <div class="col-auto programmation">
          <h3>Lundi</h3>
          <div v-for="prog in Mon" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>

        <div class="col-auto programmation">
          <h3>Mardi</h3>
          <div v-for="prog in Tue" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
        <div class="col-auto programmation">
          <h3>Mercredi</h3>
          <div v-for="prog in Wed" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
        <div class="col-auto programmation">
          <h3>Jeudi</h3>
          <div v-for="prog in Thu" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
        <div class="col-auto programmation">
          <h3>Vendredi</h3>
          <div v-for="prog in Fri" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
        <div class="col-auto programmation">
          <h3>Samedi</h3>
          <div v-for="prog in Sat" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
        <div class="col-auto programmation">
          <h3>Dimanche</h3>
          <div v-for="prog in Sun" :key="prog.id">
            <div>{{prog.spectacleNom}}</div>
            <div>{{prog.horaire.split(" ")[1]}}</div>
          </div>
        </div>
      </div>
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
      Mon: [],
      Tue: [],
      Wed: [],
      Thu: [],
      Fri: [],
      Sat: [],
      Sun: [],

      maxsize: 0,
    };
  },
  created() {
    let maintenand = new Date();
    let premJanvier = new Date(maintenand.getFullYear(), 0, 1);
    let week =
      maintenand.getFullYear() +
      "-W" +
      Math.ceil(
        ((maintenand - premJanvier) / 86400000 + premJanvier.getDay() + 1) / 7
      );
    this.week = week;

    this.updateProgrammation(week);
  },

  methods: {
    updateProgrammation(week) {
      axios
        .get(
          `http://localhost:8081/representations?mode=semaine&dateDebut=&dateFin=&semaine=${week}`
        )
        .then((response) => {
          this.representations = response.data;
          let programmation = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
          programmation.forEach((day) => {
            let repsDay = this.representations.filter(
              (rep) => this.getJour(rep.horaire) == day
            );

            programmation[programmation.indexOf(day)] = repsDay;
          });

          console.log(programmation);
          this.Mon = programmation[0];
          this.Tue = programmation[1];
          this.Wed = programmation[2];
          this.Thu = programmation[3];
          this.Fri = programmation[4];
          this.Sat = programmation[5];
          this.Sun = programmation[6];
        });
    },
    onSubmit() {
      this.updateProgrammation(this.week);
    },
    getJour(horaire) {
      let date = new Date(horaire);
      let dateString = date + "";
      return dateString.split(" ")[0];
    },
  },
};
</script>