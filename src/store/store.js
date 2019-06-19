import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    city: window.localStorage.getItem('city') || '长沙'
}

const getters = {
    getCity(state){
        return state.city;
    }
}

const mutations = {
    setCity(state, city){
        state.city = city;
        window.localStorage.setItem('city', city);
    }
}

const actions = {

}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;