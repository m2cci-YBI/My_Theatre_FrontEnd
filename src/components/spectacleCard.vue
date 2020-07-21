<style scoped>
* {
  box-sizing: border-box;
}
.card-container {
  position: relative;
  width: 70%;
  height: 350px;
}
.thecard {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}
.card-container:hover .thecard {
  transform: rotateY(180deg);
}
.front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgb(168, 167, 159);
  color: #333;
  transform: rotateY(180deg);
  border-radius: 20px;
}

.contenu p {
  color: red;
  border-bottom: 2px solid black;
  width: 70%;
  margin: 0 auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
}
.contenu h3 {
  border-bottom: 2px solid black;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
}
</style>

<template>
  <div class="card-container mx-auto">
    <div class="thecard">
      <div class="front">
        <img :src="imgSrc" alt />
      </div>
      <div class="back">
        <div class="contenu my-5">
          <h3>{{ titre.toUpperCase() }}</h3>
          <p>20 % Discount</p>
        </div>
        <div class="btn btn-primary" data-toggle="modal" data-target="#mymodal">Consulter</div>
      </div>
    </div>
    <div class="modal" id="mymodal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Harry Potter</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <img src="../assets/harryPotter.jpg" alt />
              </div>
              <div class="col-8">
                <div>
                  Cet été est horrible ! Les Dursley découvrent que Harry n'a
                  pas le droit de faire de la magie pendant les vacances et
                  l'enferment dans sa chambre, en ne le laissant sortir que pour
                  faire sa toilette, afin qu'il ne retourne jamais à Poudlard.
                  Heureusement, les incorrigibles frères Weasley décident
                  d'agir...
                </div>
                <div>
                  <span class="filtre-modal">Musical</span>
                  <span class="filtre-modal">ToutPublic</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" data-dismiss="modal">Retour</button>
            <router-link to="/places">
              <button class="btn btn-primary" data-dismiss="modal">Reserver Places</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titre"],
  computed: {
    imgSrc() {
      return require(`../assets/${this.titre}.jpg`);
    },
  },
};
</script>
