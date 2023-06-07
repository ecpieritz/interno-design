<template>
  <main class="id-about">
    <Banner />

    <div class="container">
      <Prices />
      <Portfolio />
      <Contact />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/about/banner.vue'
import Prices from '@/components/about/prices.vue'
import Portfolio from '@/components/about/portfolio.vue'
import Contact from '@/components/about/contact.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, Prices, Portfolio, Contact
  }
}
</script>

<style lang="scss">
</style>