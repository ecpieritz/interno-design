<template>
  <main class="id-home">
    <Banner />

    <div class="container">
      <Work />
      <CallUs />
      <Testimonial />
      <Clients />
      <Contact />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/home/banner.vue'
import Work from '@/components/home/work.vue'
import CallUs from '@/components/home/callUs.vue'
import Testimonial from '@/components/home/testimonial.vue'
import Clients from '@/components/home/clients.vue'
import Contact from '@/components/contact.vue'
export default {
  name: 'HomeView',
  components: {
    Banner, Work, CallUs, Testimonial, Clients, Contact
  }
}
</script>

<style lang="scss">
</style>