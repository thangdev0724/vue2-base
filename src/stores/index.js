import Vue from "vue";
import Vuex from "vuex";
let store;

const modules = {};
const requireModule = require.context('./modules', false, /\.js$/);

requireModule.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  modules[moduleName] = requireModule(fileName).default;
});

export function getStore() {
  if (!store) {
    store = new Vuex.Store({
      modules,
    });
  }
  return store;
}

export function createStore(options = {}) {
  return Vuex.Store(options);
}

Vue.use(Vuex);
