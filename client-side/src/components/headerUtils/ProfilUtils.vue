<template>
  <div class="profil-utils">
    <div class="profil-picture">
      <img :src="require(`@/assets/utils/profile/doggo_profil_picture.png`)" class="picture">
    </div>
    <div class="profil-settings">
      <div class="profil-settings-bg"></div>
      <!-- TO DO -->
    </div>
  </div>
</template>

<script>


export default {
  name: 'ProfilUtils',
  components:{},
  data(){
    return{}
  },
  async mounted(){}
}
</script>

<style>
.profil-picture{
  height: 75px;
  width: 75px;
}
.picture{
  border-radius: 50px;
  width: 100%;
  border: rgba(233,233,233, 0.7) 5px solid;
}
.profil-settings{
  position: absolute;
  background-color: rgba(233,233,233, 0.5);
}
.profil-settings-bg{
  backdrop-filter: blur(15px);
  height: 100%;
  width:100%;
  z-index:-1;
  position:absolute;   
}
</style>
