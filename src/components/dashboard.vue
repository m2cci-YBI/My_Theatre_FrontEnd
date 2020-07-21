<style scoped>
.dashboard {
  min-height: 76.5vh;
}
.colonne {
  border: black 2px solid;
  height: 70vh;
  width: 100%;
  border-radius: 20px;
}

.bordure-droite {
  border-right: 1px black dashed;
}
.bordure-gauche {
  border-left: 1px black dashed;
}
.spectacle {
  border-radius: 40px;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0px;
}
.active {
  color: #ffc107;
}
</style>
<template>
  <div class="container-fluid bg-light dashboard my-3">
    <div class="row">
      <div class="col-md-2 bordure-droite">
        <h4 class="py-3 text-center">Spectacles</h4>
        <div>
          <table class="table">
            <tbody>
              <tr>
                <td class="px-0 spec-items">
                  <i
                    class="fas fa-theater-masks"
                    style=" vertical-align: middle;font-size: 40px;float:left"
                  ></i>

                  <span class="btn btn-dark spectacle ml-2 mb-2">HarryPotter</span>
                  <div style="display:none">
                    <i
                      class="fa fa-trash ml-2"
                      style="float:right; font-size: 25px;cursor:pointer "
                    ></i>
                    <i
                      class="fa fa-edit"
                      data-toggle="modal"
                      data-target="#mymodal2"
                      style="float:right; font-size: 25px;;cursor:pointer"
                    ></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-0 spec-items">
                  <i
                    class="fas fa-theater-masks"
                    style=" vertical-align: middle;font-size: 40px;float:left"
                  ></i>

                  <span class="btn btn-dark spectacle ml-2 mb-2">Antigone</span>
                  <div style="display:none">
                    <i
                      class="fa fa-trash ml-2"
                      style="float:right; font-size: 25px;cursor:pointer "
                    ></i>
                    <i
                      class="fa fa-edit"
                      data-toggle="modal"
                      data-target="#mymodal2"
                      style="float:right; font-size: 25px;;cursor:pointer"
                    ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="pl-3">
            <i
              class="fa fa-plus-circle"
              data-toggle="modal"
              data-target="#mymodal2"
              style="float:left; font-size: 30px;cursor:pointer"
            ></i>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <div class="col-md-2 bordure-gauche">
        <div class="card text-center bg-primary text-white mb-3 px-0">
          <div class="card-body px-0">
            <h4>Programmation</h4>
            <h4 class="display-4">
              <i class="fas fa-cog"></i>
            </h4>
            <router-link to="/dashboard" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-success text-white mb-3">
          <div class="card-body">
            <h3>Mailer</h3>
            <h4 class="display-4">
              <i class="fas fa-envelope"></i>
            </h4>
            <router-link to="/dashboard/mailer" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
        <div class="card text-center bg-danger text-white mb-3">
          <div class="card-body">
            <h3>Statistiques</h3>
            <h4 class="display-4">
              <i class="fas fa-signal"></i>
            </h4>
            <router-link to="/dashboard/statistiques" class="btn btn-outline-light btn-sm">Voir</router-link>
          </div>
        </div>
      </div>
      <div class="modal" id="mymodal2">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <form action>
                <div class="form-group mt-4">
                  <label for="nom">Nom Spectacle</label>
                  <input type="text" class="form-control" placeholder />
                </div>
                <div class="form-group">
                  <label for="prix">Prix</label>
                  <input type="number" class="form-control" placeholder />
                </div>
                <div class="form-group">
                  <label for="prix">Presentation</label>
                  <textarea type="text" class="form-control" rows="2"></textarea>
                </div>
                <div class="form-group">
                  <label for="cible">Cible</label>
                  <select class="form-control">
                    <option>TOUTPUBLIC</option>
                    <option>JEUNE</option>
                    <option>ADULTE</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="cible">Genre</label>
                  <select class="form-control">
                    <option>DRAME</option>
                    <option>COMEDY</option>
                    <option>HUMOUR</option>
                  </select>
                </div>

                <label for="zone">Zones Occupées</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone1" value="1" />
                    <label class="form-check-label" for>1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone2" value="2" />
                    <label class="form-check-label" for>2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone3" value="3" />
                    <label class="form-check-label" for>3</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone4" value="4" />
                    <label class="form-check-label" for>4</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone5" value="5" />
                    <label class="form-check-label" for>5</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="zone6" value="6" />
                    <label class="form-check-label" for>6</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-dismiss="modal">Valider</button>
              <button class="btn btn-danger" data-dismiss="modal">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {


  mounted(){
    const spec_items= document.querySelectorAll(".spec-items")
    spec_items.forEach(item=>item.addEventListener("click",activer))
    let self=this;
     function activer(){
      spec_items.forEach(element=>{element.classList.remove("active");
                                   element.lastChild.style.display="none" 
                                   element.getElementsByTagName('span')[0].classList.remove("btn-warning");
                                   element.getElementsByTagName('span')[0].classList.add("btn-dark");})
      this.classList.add("active") 
      this.getElementsByTagName('span')[0].classList.remove("btn-dark")
      this.getElementsByTagName('span')[0].classList.add("btn-warning")
      this.lastChild.style.display="block" 
      let nom=this.getElementsByTagName('span')[0].innerHTML  

      self.$store.state.titre=nom
      
      self.$router.replace("/dashboard/spectacles") 
    }
   
  },
  
};
</script>
