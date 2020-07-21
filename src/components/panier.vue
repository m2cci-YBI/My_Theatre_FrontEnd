<style scoped>
.zone {
  min-height: 76.5vh;
}
.total {
  font-size: 1.7rem;
}
</style>
<template>
  <div class="container zone bg-light">
    <div class="row">
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Place</th>
            <th>Rang</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Harry Potter</td>
            <td>une date</td>
            <td>2</td>
            <td>3</td>
            <td>35 €</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td class="total">Total</td>
            <td class="total">35 €</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <router-link to="/coordonneesBancaires">
        <button type="submit" class="btn btn-primary mx-2">Payer</button>
      </router-link>
      <router-link to="/">
        <button type="submit" class="btn btn-danger mx-2">Home</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>