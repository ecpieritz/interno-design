<template>
  <main class="id-contact">
    <Banner />

    <div class="container">
      <Form />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/contact/banner.vue'
import Form from '@/components/contact/form.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, Form
  }
}
</script>

<style lang="scss">
</style>