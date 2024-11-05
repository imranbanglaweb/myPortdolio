import { createRouter, createWebHistory } from 'vue-router';
// import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';

import AboutUs from '@/views/AboutUs.vue';
import MyProjects from '@/views/MyProjects.vue';
import ContactPage from '@/views/ContactPage.vue';
// import SideMenu from '@/views/SideMenu.vue';
// import Projects from '@/views/Projects.vue';
// import Contact from '@/views/Contact.vue';

// Vue.use(VueRouter);

const routes = [
  // { path: '/', name: 'SideMenu', component: SideMenu },
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/projects', name: 'MyProjects', component: MyProjects },
  { path: '/contactpage', name: 'ContactPage', component: ContactPage },
  // { path: '/contact', name: 'Contact', component: Contact },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
