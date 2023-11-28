const authModule = {
  state() {
    return {
      isLoading: false,
      user: null
    }
  },

  mutations: {
    ["SET_LOADING_STATUS"](state, payload) {
      console.log(state, payload)
    },

    ["SET_USER_INFO"](state, payload) {
      const { email, firstName, lastName, phoneNumber, userType, token, expiresIn } = payload.data
      localStorage.setItem("email", email)
      localStorage.setItem("lastName", lastName)
      localStorage.setItem("firstName", firstName)
      localStorage.setItem("phoneNumber", phoneNumber)
      localStorage.setItem("userType", userType)
      localStorage.setItem("token", token)
      localStorage.setItem("expiresIn", expiresIn)
      console.log(localStorage.getItem("expiresIn"))
      state.user = payload.data
    }
  },

  actions: {
    async createUserAccount(_, payload) {
      try {
        const requestLogin = await fetch(`${process.env.VUE_APP_BASE_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
        })
        const requestLoginResponse = await requestLogin.json()
        return requestLoginResponse
      }
      catch (err) {
        console.log(err)
      }
    },

    logOutUser() {
      localStorage.clear()
      return true
    },

    isTokenExpired() {
      const token = localStorage.getItem("token")
      if (!token) {
        return true
      }
      const tokenExpiresIn = localStorage.getItem("expiresIn")
      const currentTime = Math.floor(Date.now() / 1000)

      return tokenExpiresIn < currentTime
    },

    async userSignIn(context, payload) {
      context.commit('SET_LOADING_STATUS', true)
      try {
        const loginRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
        const loginResponse = await loginRequest.json()
        context.commit('SET_LOADING_STATUS', false)
        context.commit('SET_USER_INFO', loginResponse)
        const tokenExpiration = loginResponse.data.expiresIn * 1000 - Date.now()

        setTimeout(() => {
          if (this.isTokenExpired()) {
            this.logOutUser()
          }
        }, tokenExpiration)

        return loginResponse
      }
      catch (e) {
        console.log(e)
      }
    }
  }
}

export default authModule