export interface AuthStateInterface {
  user: unknown | null
  checked: boolean
}

function state(): AuthStateInterface {
  return {
    user: null,
    checked: false
  }
}

export default state
