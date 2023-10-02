import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'

import DesignLayout from './components/Layouts/DesignLayout.vue'
import AuthWrapper from './components/AuthWrapper.vue'
import DashboardCta from './components/DashboardCta.vue'
import BaseModal from './components/UI/BaseModal.vue'
import SuccessCheck from './components/UI/BaseSuccess.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'
import RecordNotFound from './components/UI/RecordNotFound.vue'
import healthPromixins from './mixins/mixin'

const app = createApp(App)

app.use(router)
app.use(store)
app.mixin(healthPromixins)

app.component('auth-wrapper', AuthWrapper)
app.component('dashboard-cta', DashboardCta)
app.component('design-layout', DesignLayout)
app.component('modal', BaseModal)
app.component("success-check", SuccessCheck)
app.component('spinner', BaseSpinner)
app.component('recordNotFound', RecordNotFound)

router.isReady().then(() => {
  app.mount('#app')
})
  .catch(err => {
    console.log(err.message)
  })