
<template>
  <div class="id-banner" id="id-banner">
    <img src="@/assets/images/id-about__banner.png" alt="" class="id-banner__img">

    <div class="id-banner__text">
      <h1>About Us</h1>

      <div class="id-banner__text__breadcrumb container">
        <router-link to="/">Home</router-link> / <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-banner {
}
</style>
