import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FONT AWESOME ICONS
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// add icons to the library
library.add(faArrowRight)
library.add(faPhone)
library.add(faLinkedin)
library.add(faGithub)


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
