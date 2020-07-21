<style scoped>
</style>
<template>
  <div class="col-md-8">
    <h4 class="py-3 text-center">{{nom}}</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date</th>

          <th>Taux Promotion</th>
          <th>
            <i
              class="fa fa-plus-circle"
              data-toggle="modal"
              data-target="#mymodal1"
              style="float:right; font-size: 30px;cursor:pointer"
            ></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="rep-items">
          <td>{{nom}}</td>
          <td>une date</td>

          <td>20 %</td>
          <td>
            <div style="visibility:hidden">
              <i class="fa fa-trash ml-2" style="float:right; font-size: 25px;cursor:pointer "></i>
              <i
                class="fa fa-edit"
                data-toggle="modal"
                data-target="#mymodal1"
                style="float:right; font-size: 25px;;cursor:pointer"
              ></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" id="mymodal1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{nom}}</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form action>
              <div class="form-group mt-4">
                <label for="date">Date Representation</label>
                <input type="date" class="form-control" placeholder />
              </div>
              <div class="form-group">
                <label for="promotion">Taux Promotion</label>
                <input type="number" class="form-control" placeholder />
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
</template>
<script>
export default {
  data () {
    return {
     
    }
  },
  mounted(){

    const rep_items= document.querySelectorAll(".rep-items")
    rep_items.forEach(item=>item.addEventListener("mouseover",afficher))
    rep_items.forEach(item=>item.addEventListener("mouseout",masquer))
   
     function afficher(){       
    this.lastChild.firstChild.style.visibility="visible"; }
    function masquer(){       
    this.lastChild.firstChild.style.visibility="hidden"; }

  
  },
  computed:{
    nom(){
      return this.$store.state.titre;
    }
  },
  
    
}
</script>