export default {
  namespaced: true,
  state: {
    name: 'John Doe',
    age: 30,
    lang: 'en'
  },
  mutations: {
    SET_NAME(state, newName) {
      state.name = newName;
    },
    SET_LANG(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    updateName({ commit }, newName) {
      commit('SET_NAME', newName);
    },
    setLang({ commit }, lang) {
      commit('SET_LANG', lang);
    }
  },
  getters: {
    accountNm: (state) => state.name,
    accountLang: (state) => state.lang
  }
};
