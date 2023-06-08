<template>
  <main class="id-contact">
    <Banner />

    <div class="container">
      <Form />
      <Map />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/contact/banner.vue'
import Form from '@/components/contact/form.vue'
import Map from '@/components/contact/map.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, Form, Map
  }
}
</script>

<style lang="scss">
</style>