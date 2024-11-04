<template>
  <sidebar-menu :menu="menu" />
  
 <div id="app">
    <Sidebar />
     <!-- Your sidebar component -->
    <div class="content">
      <!-- Displays the current route component -->
    </div>
</div>
      <router-view /> 
</template>

<script>

  export default {

    data() {
      return {
        menu: [
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true
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
          }
        ]
      }
    }
  }
</script>

<style type="text/css">
  
</style>