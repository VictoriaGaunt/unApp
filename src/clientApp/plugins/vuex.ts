/**
 * Настройка Vuex-магазина, если используется вместо/вместе с Pinia.
 */
import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = null;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('clearUser');
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
});

export default store;