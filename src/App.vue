<template>
  <div class="app">
    <!-- Sidebar -->
    <vue-sidebar-menu :collapsed="isCollapsed" class="sidebar">
      <!-- Add menu items here -->
    </vue-sidebar-menu>

    <!-- Main Content Area -->
    <div class="content">
      <!-- <button @click="toggleSidebar" class="menu-toggle">Toggle Sidebar</button> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueSidebarMenu from './components/SideMenu.vue';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default {
  components: {
    VueSidebarMenu,
  },
  data() {
    return {
      isCollapsed: window.innerWidth < 768, // Collapse by default on small screens
    };
  },
  methods: {
    handleResize() {
      this.isCollapsed = window.innerWidth < 768;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
body::-webkit-scrollbar {
  width: 8px; /* width of the scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* color of the thumb */
  border-radius: 4px; /* rounded corners */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* hover effect */
}

body::-webkit-scrollbar-track {
  background: #f1f1f1; /* background of the track */
  border-radius: 4px; /* rounded corners */
}

/* Layout container */
.app {
  display: flex;
}

/* Sidebar styles */
.sidebar {
  width: 288px;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 70px; 
}

/* Content area */
.content {
  flex: 1;
  /*padding: 20px;*/
  /*transition: margin-left 0.3s;*/
}

.content-expanded {
  margin-left: 70px; /* Adjusted margin when sidebar is collapsed */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    left: 0;
    width: 250px;
    z-index: 1000;
    height: 100vh;
  }

  .content {
    margin-left: 0;
  }

  .menu-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1100;
  }
}
</style>
