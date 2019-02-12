import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
           commit('setUser', newUser)
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
          console.log(err)
        })
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        })
        .catch(err => {
          commit('setLoading', false)
          commit('setError', err)
          console.log(err);
        })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
