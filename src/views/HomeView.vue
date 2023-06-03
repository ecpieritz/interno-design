<template>
  <div class="id-home">
    <Banner />

    <div class="container">
      <Work />
      <CallUs />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/banner.vue'
import Work from '@/components/home/work.vue'
import CallUs from '@/components/home/callUs.vue'
export default {
  name: 'HomeView',
  components: {
    Banner, Work, CallUs
  }
}
</script>

<style lang="scss">
</style>