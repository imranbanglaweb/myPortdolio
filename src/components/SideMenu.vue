<template>

    <!-- Toggle Button for Mobile -->
    <button class="toggle-btn" @click="toggleSidebar">
      ☰
    </button>

    <!-- Sidebar -->
    <div :class="['sidebar', { 'sidebar-collapsed': isCollapsed }]">
      <!-- Menu items -->
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.id" class="menu-item">
              <router-link 
            :to="item.path" 
            :class="{ 'active': $route.path === item.path }"
            >
            <i :class="item.icon"></i> {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>



</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true, // Sidebar initially collapsed in mobile view
      menuItems: [
        { label: 'Imran Rahman',path: "#"},
        { id: 1, label: "Home", path: "/", icon: "fa fa-home" },
        { id: 2, label: "About Me", path: "/about-us", icon: "fa fa-info-circle" },
        { id: 3, label: "My Projects", path: "/projects", icon: "fa fa-briefcase" },
        { id: 3, label: "My Experience", path: "/my-cv", icon: "fa fa-certificate" },
        { id: 4, label: "Reached Me", path: "/contactpage", icon: "fa fa-phone" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
    },
  },
};
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Active Class Styling */
.menu-item a.active {
  background-color: #444; /* Active state background color */
  color: #fff; /* Active state text color */
  display: block;
  padding: 10px
}

/* Sidebar Styles */
.sidebar {
  width: 270px; /* Set a width for the sidebar */
  height: 100vh;
  background: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out, width 0.3s ease;
  z-index: 10;
  padding-top: 60px; /* Ensure space for content when collapsed */
}

/* Sidebar Menu Styles */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu i {
  color: yellowgreen
}
.menu-item {
  padding: 15px 20px;
}

.menu-item a {
  color: white;
  text-decoration: none;
}

.menu-item a:hover {
  /*text-decoration: underline;*/
}

/* Sidebar Collapsed */
.sidebar-collapsed {
  transform: translateX(-100%); /* Hide the sidebar off-screen */
}

/* Toggle Button for Mobile */
.toggle-btn {
  background: #444;
  border: none;
  color: white;
  font-size: 15px;
  padding: 10px 15px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  display: none; /* Hidden by default on larger screens */
}

/* Content Area */
.content {
  margin-left: 250px; /* Default space for sidebar */
  transition: margin-left 0.3s ease-in-out;
}

.content-expanded {
  margin-left: 0; /* When sidebar is collapsed */
}

/* Desktop View */
@media (min-width: 769px) {
  .sidebar {
    transform: none; /* Sidebar is always visible on larger screens */
    width: 270px; /* Keep the sidebar at the set width */
  }

  .toggle-btn {
    display: none; /* Hide toggle button on desktop */
  }

  .content {
    margin-left: 250px; /* Sidebar is always visible, so content shifts accordingly */
  }
}

/* Mobile View */
@media (max-width: 768px) {
  /* Sidebar is initially off-screen */
  .sidebar {
    transform: translateX(-100%);
  }

  /* Show sidebar when not collapsed */
  .sidebar:not(.sidebar-collapsed) {
    transform: translateX(0);
  }

  /* Show toggle button on mobile */
  .toggle-btn {
    display: block;
  }

  /* Content area adjusts when sidebar is collapsed */
  .content {
    margin-left: 0;
  }

  .content-expanded {
    margin-left: 250px; /* Shift content when sidebar is expanded */
  }
}
</style>
