import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { AuthStateInterface } from './state'
import firebase from 'firebase/app'

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit('setUser', user)
      } else {
        commit('setUser', null)
      }
      commit('setChecked', true)
    })
  },
  signInGoogleAction() {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

    return firebase
      .auth()
      .signInWithPopup(provider)
      .catch(err => console.error(err))
  },
  signOutAction() {
    return firebase
      .auth()
      .signOut()
      .catch(err => console.error(err))
  }
}

export default actions
