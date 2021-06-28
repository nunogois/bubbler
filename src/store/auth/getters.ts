import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { AuthStateInterface } from './state'

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  getUser(state) {
    return state.user
  },
  isUserAuth(state) {
    return !!state.user
  },
  getChecked(state) {
    return state.checked
  }
}

export default getters
