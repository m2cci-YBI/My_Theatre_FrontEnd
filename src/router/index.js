import Vue from "vue";
import VueRouter from "vue-router";

import Acceuil from "../components/acceuil.vue";
import TheatreInfoContenu1 from "../components/theatreinfoContenu1.vue";
import TheatreInfoContenu2 from "../components/theatreinfoContenu2.vue";
import TheatreInfoContenu3 from "../components/theatreinfoContenu3.vue";
import Programmation from "../components/programmation.vue";
import Places from "../components/places.vue";
import CoordonneesPerso from "../components/coordonneesPerso.vue";
import CoordonneesBancaires from "../components/coordonneesBancaires.vue";
import Panier from "../components/panier.vue";
import Login from "../components/login.vue";
import Configuration from "../components/configuration.vue";
import Dashboard from "../components/dashboard.vue";
import Contact from "../components/contact.vue";
import Mailer from "../components/mailer.vue";
import ProgrammationGerant from "../components/programmationGerant.vue"
import ConfigurationRep from "../components/configurationRep.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
  { path: "/programmation", component: Programmation },
  { path: "/places", component: Places },
  { path: "/coordonneesPerso", component: CoordonneesPerso },
  { path: "/coordonneesBancaires", component: CoordonneesBancaires },
  { path: "/panier", component: Panier },
  {
    path: "/dashboard", component: Dashboard, children: [
      { path: "/dashboard", component: ProgrammationGerant },
      { path: "/dashboard/mailer", component: Mailer },
      {
        path: "/dashboard/configuration", component: Configuration, children: [

          { path: "", component: ConfigurationRep },
        ]
      }

    ]
  },
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
