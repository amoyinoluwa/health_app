import { createStore } from "vuex";
import authModule from "./modules/auth";
import userModule from "./modules/users"


const store = new createStore({
  state() {
    return {
      token: localStorage.getItem("token") || null,
      user: {
        email: localStorage.getItem("email"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        lastName: localStorage.getItem("lastName"),
        firstName: localStorage.getItem("firstName"),
        userType: localStorage.getItem('userType')
      } || null,
      displayModal: false,
      selectedHoldingBay: '',
      fetchResource: false,
      sessionTimeOut: false,
      showUserAppointmentModal: false,
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
  modules: {
    Auth: authModule,
    Patient: userModule

  }
})

export default store