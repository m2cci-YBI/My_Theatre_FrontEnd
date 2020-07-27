<style scoped>
</style>

<template>
  <div class="col-md-7">
    <h4 class="py-3 text-center">Mailer</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Objet</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="mail-items" v-for="m in mails" :key="m.id">
          <td>{{m.nom}}</td>
          <td>{{m.email}}</td>
          <td>{{m.objet}}</td>
          <td>
            <div style="visibility:hidden">
              <i
                class="fa fa-eye ml-2"
                style="float:right; font-size: 25px;cursor:pointer "
                @click="voirMessage($event ,m)"
              ></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      mails: [],
      toggle: false,
    };
  },
  methods: {
    voirMessage($event, m) {
      if (this.toggle) {
        const messages = document.querySelectorAll(".message");
        messages.forEach((m) => (m.style.display = "none"));
      }

      $(
        '<tr class="message">' +
          '<td colspan="4"> <div class="card card-body">' +
          m.nom +
          "   :   " +
          m.message +
          "</div> </td>" +
          "</tr>"
      ).insertAfter($event.target.closest(".mail-items"));
      this.toggle = true;
    },
    affichageEye() {
      const mail_items = document.querySelectorAll(".mail-items");
      console.log(mail_items);
      mail_items.forEach((item) =>
        item.addEventListener("mouseover", afficher)
      );
      mail_items.forEach((item) => item.addEventListener("mouseout", masquer));

      function afficher() {
        this.lastChild.firstChild.style.visibility = "visible";
      }
      function masquer() {
        this.lastChild.firstChild.style.visibility = "hidden";
      }
    },
  },
  updated() {
    this.affichageEye();
  },

  mounted() {
    axios.get("http://localhost:8081/mailier").then((response) => {
      this.mails = response.data;
    });
  },
};
</script>