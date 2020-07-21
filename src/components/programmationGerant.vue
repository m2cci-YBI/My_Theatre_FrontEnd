<template>
  <div class="col-md-8">
    <div class="row my-2">
      <form class="form-inline mx-auto">
        <div class="input-group">
          <input type="week" class="form-control" placeholder="Semaine" />
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
export default {
    
}
</script>