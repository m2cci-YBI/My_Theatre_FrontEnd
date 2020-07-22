<style scoped>
</style>

<template>
  <div class="col-md-8">
    <h4 class="py-3 text-center">Mailer</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Objet</th>
        </tr>
      </thead>
      <tbody>
        <tr data-toggle="collapse" data-target="#collapseExample" style="cursor:pointer">
          <td>client</td>
          <td>une date</td>
          <td>Ajout presentation</td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="collapse" id="collapseExample">
              <div
                class="card card-body"
              >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
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
    
}
</script>