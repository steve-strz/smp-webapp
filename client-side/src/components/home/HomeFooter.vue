<template>
  <div class="footer row w-100 m-0">
    <div class="col-12">
      <TimeUtils/>
    </div>
  </div>
</template>

<script>
import TimeUtils from "@/components/footerUtils/TimeUtils.vue"

export default {
  name: 'HomeHeader',
  components:{
    TimeUtils
  },
  data(){
    return{}
  },
  async mounted(){}
}
</script>

<style>

</style>
