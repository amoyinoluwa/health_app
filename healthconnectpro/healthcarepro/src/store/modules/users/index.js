const userModule = {
  state() {
    return {
      previousChatHistory: [],
      isChatting: false,
      currentChat: {},

      bot: [
        {
          question: "fallback",
          answer: "I am sorry! I can't provide an accurate response at this time. I haven't been trained to properly answer all health related questions."
        },
        {
          question: "Give healthy breakfast recommendations",
          answer: "Certainly! A healthy breakfast is an important part of a balanced diet and provides the energy needed to kickstart your day. Here are some healthy breakfast recommendations: 1. Oatmeal, 2. Greek Yogurt with Berries, 3. Whole Grain Toast with Avocado, 4. Smoothie Bowl, 5. Eggs and Vegetables"
        }
      ]
    }
  },

  mutations: {
    ['SET_CURRENT_CHAT'](state, payload) {
      console.log(payload, state)
      state.currentChat = {
        logs: payload.chatLogs,
        chatStartAt: payload.chatStartedAt,
        chatTopic: payload.chatTopic
      }
      localStorage.setItem("currentChat", JSON.stringify(state.currentChat));
    },

    ['SET_PREVIOUS_CHAT'](state, payload) {
      state.previousChatHistory = payload
    },

    ['SET_SELECTED_CHAT'](state, payload) {
      // console.log(payload)
      state.currentChat = {
        chatStartedAt: payload.chatStartedAt,
        chatTopic: payload.chatTopic,
        logs: payload.chatLogs
      };
      localStorage.setItem("currentChat", JSON.stringify(state.currentChat));
    }
  },


  actions: {

    async previewSelectedChat(context, payload) {
      const { chatId, timestamp } = payload
      if (!chatId) return
      const chats = await fetch(`${process.env.VUE_APP_BASE_URL}/chat/${chatId}/${timestamp}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${context.rootState.token}`
        }
      })
      const chatResponse = await chats.json()
      context.commit('SET_SELECTED_CHAT', chatResponse.data)
    },

    async previousChatHistory(context) {
      const getPreviousChatHistory = await fetch(`${process.env.VUE_APP_BASE_URL}/chats`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${context.rootState.token}`
        }
      })
      const content = await getPreviousChatHistory.json()
      context.commit('SET_PREVIOUS_CHAT', content.data)
      return content
    },


    async askHealthCarePro(context, payload) {
      const state = context.state
      const { chat, status } = payload
      const botResponse = state.bot.findIndex(bot => bot.question === chat)
      let botIndex
      if (botResponse > -1) {
        botIndex = botResponse
      }
      else {
        botIndex = 0
      }
      const response = {
        userAsked: chat,
        botIndex,
        chatStartedAt: Date.now(),
      }
      //console.log(botIndex)

      let chatId;
      if (localStorage.getItem("currentChatId")) {
        chatId = localStorage.getItem("currentChatId")
      }
      else {
        chatId = null
      }
      const logChats = await fetch(`${process.env.VUE_APP_BASE_URL}/chats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.rootState.token}`
        },
        body: JSON.stringify({ chatTopic: chat, status, botResponse: context.state.bot[botIndex].answer, chatStartedAt: response.chatStartedAt, chatId })
      })
      const loggedChatResponse = await logChats.json()
      localStorage.setItem("currentChatId", loggedChatResponse.data.id)
      context.commit('SET_CURRENT_CHAT', loggedChatResponse.data)
      return loggedChatResponse
    }
  },


  getters: {
    getChattingStatus: (state) => {
      return state.isChatting
    },
    getCurrentChats: state => {
      return state.currentChat
    },

    getChatHistory: state => {
      return state.previousChatHistory
    }
  },




}


export default userModule
