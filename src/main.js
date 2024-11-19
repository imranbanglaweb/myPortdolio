import { createApp } from 'vue';


import App from './App.vue';

// import TypewriterComponent from '@/components/TypewriterComponent.vue'
// import FontAwesomeIcon from './plugins/fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser,faList, faInfo, faGlobe, faPhone, faCheck, faBriefcase, faCalendar , faUniversity, faMapMarkerAlt, faEnvelope, faCertificate, faGraduationCap    } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
// import App from './App.vue';
// import HomePage from './views/HomePage.vue';
import router from './router';

library.add(faPhone,faHome, faUser, faList, faInfo, faFacebook, faUniversity, faBriefcase, faEnvelope, faCalendar , faGraduationCap, faMapMarkerAlt, faCertificate,  faTwitter, faCheck, faGlobe, faInstagram, faLinkedin, faWhatsapp)
// Ensure the app navigates to the default route on load
// router.isReady().then(() => {
//   if (router.currentRoute.value.path === '/') {
//     router.push('/about-us'); // Programmatically set the default route




//   }
// });
const app = createApp(App);
app.use(VueSidebarMenu)
app.use(PerfectScrollbar)
// app.use(TypewriterComponent)
app.component('font-awesome-icon', FontAwesomeIcon); // Register globally
app.use(router).mount('#app');



