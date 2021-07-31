<template>
  <div class="home">
    <HomeHeader/>
    <div class="container main-activity">
      <TileGrid/>
    </div>
    <HomeFooter/>
  </div>
</template>

<script>
import TileGrid from "@/components/TileGrid"
import HomeHeader from "@/components/home/HomeHeader.vue"
import HomeFooter from "@/components/home/HomeFooter.vue"

import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'Home',
  components:{
    TileGrid,
    HomeHeader,
    HomeFooter
  },
  async mounted(){
    await sensorsAPI.list().then((response) => {
      console.log(response);
    });
  }
}
</script>

<style>
.header{
  padding-top: 25px;
}
.main-activity{
  padding-top: 10px;
  height: 100%;
}
</style>
