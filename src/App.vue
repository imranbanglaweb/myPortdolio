<template>
  <div class="app">
    <!-- Sidebar -->
    <vue-sidebar-menu :collapsed="isCollapsed" class="sidebar">
      <!-- Add menu items here -->
    </vue-sidebar-menu>

    <!-- Main Content Area -->
    <div :class="['content', { 'content-expanded': !isCollapsed }]">
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
      isCollapsed: false, // Initially set the sidebar as expanded
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed; // Toggle the sidebar state
    },
  },
};
</script>

<style scoped>
/* Styling for the scrollbar */
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

/* Layout container */
.app {
  display: flex;
  flex-direction: row;
}

/* Sidebar Styling */
.sidebar {
  width: 250px; /* Fixed width for the sidebar */
  transition: transform 0.3s ease, width 0.3s ease;
  height: 100vh;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 60px; /* To ensure space for content when collapsed */
}

/* Mobile view: Sidebar is initially hidden */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%); /* Sidebar off-screen */
  }

  .sidebar:not(.sidebar-collapsed) {
    transform: translateX(0); /* Sidebar slides in when expanded */
  }

  /* Toggle button */
  .toggle-btn {
    display: block;
    background: #444;
    color: white;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 20;
  }
}

/* Content area */
.content {
  flex: 1;
  margin-left: 250px; /* Adjust margin to accommodate sidebar */
  transition: margin-left 0.3s ease;
}

.content-expanded {
  margin-left: 0; /* No margin when sidebar is collapsed */
}

/* Desktop view */
@media (min-width: 769px) {
  .toggle-btn {
    display: none; /* Hide the toggle button on desktop */
  }

  .sidebar {
    transform: none; /* Sidebar is always visible */
  }
}
</style>
