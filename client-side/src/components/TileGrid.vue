<template>
  <div class="grid">
    <div class="d-flex justify-content-center">
      <TallTile/>
      <TallTile/>
      <TallTile/>
      <div class="d-flex">
        <div class="col align-items-center">
          <MediumTile/>
          <MediumTile style="margin-top:20px"/>
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
}
</script>

<style>
.grid{
  height: 300px;
  width: 100%;
}
</style>
