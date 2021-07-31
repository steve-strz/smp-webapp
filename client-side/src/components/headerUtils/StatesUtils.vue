<template>
  <div class="states-utils">
    <div class="d-flex justify-content-center">
      <div v-for="indicator in indicators" :key="indicator.name">
        <img :src="require(`@/assets/utils/states/states-utils-${indicator.name + (indicator.state == true ? '-enabled' : (indicator.state == false ? '-disabled' : '-checking')) + '.png'}`)" class="state">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatesUtils',
  components:{},
  data(){
    return{
      indicators:[
        {
          name:"ethernet",
          state:false,
        },
        {
          name:"bluetooth",
          state:true,
        },
        {
          name:"hotspot",
          state:true,
        }
      ]
    }
  },
  async mounted(){}
}
</script>

<style>
.states-utils{
  padding-top:25px;
}
.state{
  margin: 0 10px;
  width: 30px;
}
</style>
