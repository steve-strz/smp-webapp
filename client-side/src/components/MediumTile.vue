<template>
  <div class="medium-tile" v-bind:class="{ transparent: !name }" v-bind:style="`background: linear-gradient(150deg, rgba(${colors[0]},${colors[1]},${colors[2]}) 0%, rgb(${colors[3]},${colors[4]},${colors[5]}) 100%)`">
    <div class="row justify-content-center">
      <img :src="require(`@/assets/tiles/${iconName}`)"  v-bind:class="{ icon: name, 'big-icon': !name }">
      <div v-if="name" class="col-12 tile-title">
        {{name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediumTile',
  props:{
    name: String,
    iconName: String,
    colors: Array
  }
}
</script>

<style scoped>
.medium-tile{
  margin: 30px 0;
  width: 100%;
  height:200px;
  background: rgb(255,182,77);
  background: linear-gradient(150deg, rgba(18,158,255) 0%, rgb(31, 101, 206) 100%);  
  box-shadow: 5px 7px 11px 0px rgba(0,0,0,0.39);
}
.icon{
  margin: 30px 0 0 0;
  width: 40%;
}
.big-icon{
  margin: 50px 0;
  width: 100px;
}
.tile-title{
  margin-top: 10px;
  color:white;
  font-size: 25px;
  font-weight: bold;
}
.transparent{
  opacity: 0.4;
}
</style>
