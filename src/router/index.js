import Vue from "vue";
import VueRouter from "vue-router";

import Acceuil from "../components/acceuil.vue";
import TheatreInfoContenu1 from "../components/theatreinfoContenu1.vue";
import TheatreInfoContenu2 from "../components/theatreinfoContenu2.vue";
import TheatreInfoContenu3 from "../components/theatreinfoContenu3.vue";
import Programmation from "../components/programmation.vue";
import Places from "../components/places.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/programmation", component: Programmation },
  { path: "/places", component: Places },
  {
    path: "",
    component: Acceuil,
    children: [
      { path: "", component: TheatreInfoContenu3 },
      { path: "contenu1", component: TheatreInfoContenu1 },
      { path: "contenu2", component: TheatreInfoContenu2 },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
