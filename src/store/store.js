import { createStore } from "vuex";


const store = new createStore({
  state() {
    return {
      token: localStorage.getItem("token") || null,
      user: {
        email: localStorage.getItem("email"),
        isEmailVerified: localStorage.getItem("isEmailVerified"),
        id: localStorage.getItem("id"),
        lastLogin: localStorage.getItem("lastLogin"),
        name: localStorage.getItem("name"),
        userType: localStorage.getItem('userType')
      } || null,
      displayModal: false,
      selectedHoldingBay: '',
      fetchResource: false,
      sessionTimeOut: false
    }
  },
  mutations: {
    ["SET_FETCH_RESOURCE"](state, payload) {
      state.fetchResource = payload
    }
  },
  getters: {
    nameCapitalizer(state) {
      const arr = state.user.name.split(" ")
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
      const capitalized = arr.join(" ")
      return capitalized
    },
    getFetchResource: state => state.fetchResource
  },
  // modules: {
  //   Auth: AuthModule,
  //   Wallet: WalletModule,
  //   TruckManagement: TruckModule,
  //   CallUp: CallUpModule,
  //   Park: ParkModule,
  //   Terminal: TerminalModule,
  //   Union: UnionModule
  // }
})

export default store