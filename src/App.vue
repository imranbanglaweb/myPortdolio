<template>
  <div id="app">
    <aside class="sidebar">
      <SideMenu />
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
<script>
import SideMenu from './components/SideMenu.vue';

export default {
   name: "App",
  components: {
    SideMenu, // Register SideMenu here
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100%
}

.sidebar {
  width: 280px; 
  /* Adjust width as needed */
  background-color: #f8f9fa; /* Optional: add a background color */
  overflow: hidden;
}

.main-content {
  flex: 1;
  padding: 15px 10px 0 5px;
    width: 100%;
  overflow-y: auto;
}
</style>
