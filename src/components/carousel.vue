<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item carousel-image-1 active">
        <div class="container">
          <div class="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 class="display-3">Andromaque</h1>
            <p class="lead">
              Oreste, le fils d’Agamemnon, est envoyé par les Grecs à Buthrote
              pour demander à Pyrrhus, roi d’Épire, qu’il lui livre Astyanax, le
              fils de sa captive troyenne Andromaque. Or Pyrrhus aime Andromaque
              et délaisse sa fiancée Hermione, fille d’Hélène. Pour Oreste, qui
              n’a cessé d’aimer en vain Hermione, l’espoir renaît...
            </p>
          </div>
        </div>
      </div>

      <div class="carousel-item carousel-image-2">
        <div class="container">
          <div class="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 class="display-3">Harry Potter</h1>
            <p class="lead">
              Cet été est horrible ! Les Dursley découvrent que Harry n'a pas le
              droit de faire de la magie pendant les vacances et l'enferment
              dans sa chambre, en ne le laissant sortir que pour faire sa
              toilette, afin qu'il ne retourne jamais à Poudlard. Heureusement,
              les incorrigibles frères Weasley décident d'agir...
            </p>
          </div>
        </div>
      </div>

      <div class="carousel-item carousel-image-3">
        <div class="container">
          <div class="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 class="display-3">Cyrano de Bergerac</h1>
            <p class="lead">
              Cyrano est un mousquetaire intrépide, appartenant à la compagnie
              des Cadets de Gascogne. Il est amoureux de sa cousine Roxane mais
              n'ose pas se déclarer... Car elle est belle et il est laid,
              affligé d'un énorme nez. Par amour pour elle,...
            </p>
          </div>
        </div>
      </div>
    </div>

    <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
      <span class="carousel-control-prev-icon"></span>
    </a>

    <a href="#myCarousel" data-slide="next" class="carousel-control-next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<style scoped>
.carousel-item {
  height: 90vh;
}
h1 {
  font-family: Berkshire Swash, sans-serif;
}
p {
  padding-bottom: 7rem;
}

.carousel-image-1 {
  background: url("../assets/image1.jpg");
  background-size: cover;
}
.carousel-image-2 {
  background: url("../assets/image2.jpg");
  background-size: cover;
}
.carousel-image-3 {
  background: url("../assets/image3.jpg");
  background-size: cover;
}
</style>
