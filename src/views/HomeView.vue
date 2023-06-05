<template>
  <div class="id-home">
    <Banner />

    <div class="container">
      <Work />
      <CallUs />
      <Testimonial />
      <Clients />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/banner.vue'
import Work from '@/components/home/work.vue'
import CallUs from '@/components/home/callUs.vue'
import Testimonial from '@/components/home/testimonial.vue'
import Clients from '@/components/home/clients.vue'
export default {
  name: 'HomeView',
  components: {
    Banner, Work, CallUs, Testimonial, Clients
  }
}
</script>

<style lang="scss">
</style>