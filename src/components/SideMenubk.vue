<template>
  
   <div class="sidebar">

  <!-- <sidebar-menu :menu="menu"/> -->
  <sidebar-menu :menu="menuItems">
    <template v-slot="{ item }">
      <div class="menu-item">
        <img v-if="item.imgSrc" :src="item.imgSrc" class="menu-icon" alt="icon" />
        <span>{{ item.name }}</span>
      </div>
    </template>
  </sidebar-menu>

  
    </div>
</template>

<script>


  export default {

    data() {
      return {
isCollapsed: true, // Collapse by default on small screens
        menuItems: [
         {
          title: 'Imran Rahman'
        },
         {
          // title: 'Profile',
          imgSrc: require('@/assets/logo.png'),
          path: '/profile',
        },
        
          {
            href: '/',
            title: 'Home',
             icon: {
    element: 'font-awesome-icon',
    attributes: {
      // Then under icon.attributes, specify the icon to use
      icon: 'home'
    }
  }
          },
          {
            href: '/about-us',
            title: 'About Me',
              icon: {
    element: 'font-awesome-icon',
    attributes: {
      // Then under icon.attributes, specify the icon to use
      icon: 'user'
    }
  }
          },
          {
            href: '/projects',
            title: 'My Projects',
              icon: {
    element: 'font-awesome-icon',
    attributes: {
      // Then under icon.attributes, specify the icon to use
      icon: 'list'
    }
  }
          },
          {
            href: '/my-cv',
            title: 'My Experience',
              icon: {
    element: 'font-awesome-icon',
    attributes: {
      // Then under icon.attributes, specify the icon to use
      icon: 'certificate'
    }
  }
          },
          {
            href: '/contactpage',
            title: 'Contact Me',
              icon: {
    element: 'font-awesome-icon',
    attributes: {
      // Then under icon.attributes, specify the icon to use
      icon: 'info'
    }
  }
          }
        ]
      }
    },



  }
</script>



<style scoped>
/*.sidebar {
  width: 200px;
  background-color: #333;
  color: #000;
  padding: 15px;
}*/
.sidebar nav a {
  display: block;
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
  font-size: 12px
}
.sidebar nav a.router-link-active {
  font-weight: bold;
}
.v-sidebar-menu {
  --vsm-primary-color: #4285f4;
  --vsm-base-bg: #2a2a2e;
  --vsm-item-color: #fff;
  --vsm-item-active-color:;
  --vsm-item-active-bg:;
  --vsm-item-active-line-color: var(--vsm-primary-color);
  --vsm-item-open-color: #fff;
  --vsm-item-hover-color:;
  --vsm-item-open-bg: var(--vsm-primary-color);
  --vsm-item-hover-bg: rgba(30, 30, 33, 0.5);
  --vsm-icon-color: var(--vsm-item-color);
  --vsm-icon-bg: #1e1e21;
  --vsm-icon-active-color:;
  --vsm-icon-active-bg:;
  --vsm-icon-open-color:;
  --vsm-icon-open-bg:;
  --vsm-mobile-item-color: #fff;
  --vsm-mobile-item-bg: var(--vsm-primary-color);
  --vsm-mobile-icon-color: var(--vsm-mobile-item-color);
  --vsm-mobile-icon-bg: transparent;
  --vsm-dropdown-bg: #36363b;
  --vsm-header-item-color: rgba(255, 255, 255, 0.7);
  --vsm-toggle-btn-color: #fff;
  --vsm-toggle-btn-bg: #1e1e21;
  --vsm-item-font-size: 14px;
  --vsm-item-line-height: 35px;
  --vsm-item-padding: 10px 15px;
  --vsm-icon-height: 20px;
  --vsm-icon-width: 20px;
}
</style>