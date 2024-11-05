<template>
  <div class="app-container">
    <!-- Sidebar -->
    <vue-sidebar-menu :collapsed="isCollapsed" class="sidebar">
      <!-- Add menu items here -->
    </vue-sidebar-menu>

    <!-- Main Content Area -->
    <div class="content" :class="{ 'content-expanded': isCollapsed }">
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
/* Layout container */
.app-container {
  display: flex;
}

/* Sidebar styles */
.sidebar {
  width: 280px; /* Default sidebar width */
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 70px; /* Collapsed sidebar width */
}

/* Content area */
.content {
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s;
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
