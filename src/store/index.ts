import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex'

import auth from './auth'
import { AuthStateInterface } from './auth/state'

export interface StateInterface {
  auth: AuthStateInterface
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key')

export default store(function () {
  const Store = createStore<StateInterface>({
    modules: {
      auth
    },

    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}
