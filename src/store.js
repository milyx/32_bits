import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    datos: [
      {
        "codigo": 1,
        "nombre": "sekiro",
        "stock": 100,
        "precio": 30000,
        "color": "red",
        "destacado": true,
      },
      {
        "codigo": 2,
        "nombre": "fifa 21",
        "stock": 100,
        "precio": 25000,
        "color": "blue",
        "destacado": false,
      }
    ],
  },
  getters: {},
  mutations: {
    PETICION_DATA(state, payload) {
      state.comercio = payload;
      console.log("PETICION_DATA", payload);
    },
  },
  actions: {
    PETICION_DATA({ commit }) {
      const data = [
        {
          "codigo": 1,
          "nombre": "sekiro",
          "stock": 100,
          "precio": 30000,
          "color": "red",
          "destacado": true,
        },
        {
          "codigo": 2,
          "nombre": "fifa 21",
          "stock": 100,
          "precio": 25000,
          "color": "blue",
          "destacado": false,
        },
        {
          "codigo": 3,
          "nombre": "gears of war 4",
          "stock": 100,
          "precio": 15000,
          "color": "green",
          "destacado": true,
        },
        {
          "codigo": 4,
          "nombre": "mario tennis aces",
          "stock": 100,
          "precio": 35000,
          "color": "yellow",
          "destacado": false,
        },
        {
          "codigo": 5,
          "nombre": "bloodborne",
          "stock": 100,
          "precio": 10000,
          "color": "blue",
          "destacado": false,
        },
        {
          "codigo": 6,
          "nombre": "forza horizon 4",
          "stock": 100,
          "precio": 20000,
          "color": "red",
          "destacado": true,
        },
      ];
      commit("PETICION_DATA", data);
    },
  },
});

export default store;
