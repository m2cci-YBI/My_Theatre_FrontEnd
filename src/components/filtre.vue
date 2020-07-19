<style scoped>
* {
  box-sizing: border-box;
}
.filtre {
  cursor: pointer;
}
.filtre:hover {
  color: red;
}
.filtre.active .checkbox {
  background: url(../assets/checked.jpg);
  background-size: cover;
}
.checkbox {
  display: inline-block;
  height: 20px;
  width: 20px;
  border: 2px solid black;
  margin: 5px;
  border-radius: 5px;
}
</style>
<template>
  <div
    class="row my-1 align-items-center filtre"
    @click="checked = !checked"
    :class="{ active: checked }"
  >
    <span class="checkbox "></span>
    <span class="checkbox-item ">{{ name }} </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  props: ["name"],
};
</script>
