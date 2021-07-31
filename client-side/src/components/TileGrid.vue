<template>
  <div class="grid">
    <div class="d-flex">
      <div v-for="col in $store.state.tiles" :key="col.name" class="col-3"> 
        <div v-for="tile in col.tiles" :key="tile.name">
          <MediumTile :name="tile.name" :iconName="tile.iconName" :colors="tile.colors"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TallTile from "./TallTile.vue"
import MediumTile from "./MediumTile.vue"

export default {
  name: 'TileGrid',
  components:{
    TallTile,
    MediumTile
  },
  data(){
    return{
      colorsArray: [18, 158, 255, 31, 101, 206]
    }
  }
}
</script>

<style>
.grid{
  height: 100%;
  width: 100%;
}
</style>
