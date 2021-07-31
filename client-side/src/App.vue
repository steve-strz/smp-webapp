<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap');

#app {
  background-image: url('./assets/main-background.jpg');
  background-size: cover;                      
  background-repeat: no-repeat;
  background-position: center center; 
  font-family: 'Rajdhani', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
