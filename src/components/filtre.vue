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
    @click="toggleFiltre"
    :class="{ active: ischecked }"
  >
    <span class="checkbox"></span>
    <span class="checkbox-item">{{ name }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ischecked: false,
    };
  },
  computed: {
    desactive() {
      return this.$store.state.desactiveFiltres;
    },
  },
  watch: {
    desactive: function () {
      this.ischecked = false;
    },
  },

  props: ["name", "type"],
  methods: {
    toggleFiltre() {
      this.ischecked = !this.ischecked;
      this.$emit("check-filtre", this.type, this.name, this.ischecked);
    },
  },
};
</script>
