<template>
  <main class="id-about">
    <Banner />

    <div class="container">
      <Prices />
      <Portfolio />
    </div>
  </main>
</template>

<script>
import Banner from '@/components/about/banner.vue'
import Prices from '@/components/about/prices.vue'
import Portfolio from '@/components/about/portfolio.vue'
export default {
  name: 'DefaultBannerView',
  components: {
    Banner, Prices, Portfolio
  }
}
</script>

<style lang="scss">
</style>