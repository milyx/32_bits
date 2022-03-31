import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/InicioView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio"
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: () =>
        import(/* webpackChunkName: "busqueda" */ "./views/BusquedaView.vue"),
    },
    {
      path: "/ventas",
      name: "ventas",
      component: () =>
        import(/* webpackChunkName: "ventas" */ "./views/VentasView.vue"),
    },
    {
      path: "/total",
      name: "total",
      component: () =>
        import(/* webpackChunkName: "total" */ "./views/TotalView.vue"),
    },
  ],
});
