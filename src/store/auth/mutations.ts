import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'

const mutation: MutationTree<AuthStateInterface> = {
  setUser(state, payload) {
    state.user = payload
  },
  setChecked(state, payload: boolean) {
    state.checked = payload
  }
}

export default mutation
