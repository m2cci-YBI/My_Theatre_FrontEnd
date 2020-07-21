<style scoped>
</style>
<template>
  <div class="container bg-light py-5">
    <div class="col-md-6 offset-3">
      <h3>Contact</h3>
      <form>
        <div class="input-group input-group-lg my-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-user"></i>
            </span>
          </div>

          <input type="text" class="form-control" placeholder="Nom" />
        </div>
        <div class="input-group input-group-lg my-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-envelope"></i>
            </span>
          </div>

          <input type="text" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group input-group-lg mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </div>
          <textarea type="text" class="form-control" placeholder="Message" rows="5"></textarea>
        </div>

        <input type="submit" value="Envoyer" class="btn btn-primary btn-block btn-large" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>