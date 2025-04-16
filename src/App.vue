<template>
  <NavbarComponent @toggleTheme="changeTheme" :isDark="this.isDarkTheme" class="pb-3"></NavbarComponent>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  export default{
    name: 'HomeView',
    components: {
      NavbarComponent,
    },
    data() {
      return {
        currentTheme: localStorage.getItem('theme') || 'dark',
        isDarkTheme: false,
      };
    },
    methods: {
      changeTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between dark and light themes
        // Update the theme in local storage and on the body element
        this.currentTheme = newTheme;
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-bs-theme', newTheme);
        this.toggleBtnTheme();
      },
      toggleBtnTheme(){
        this.isDarkTheme = this.currentTheme === 'dark' ? true : false;
      }
    },
    created(){
      document.body.setAttribute('data-bs-theme', this.currentTheme); // Set the initial theme
      this.toggleBtnTheme();
    }
  }
</script>

<style>
 body{
  height: 100vh;
 }
</style>