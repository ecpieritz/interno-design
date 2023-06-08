
<template>
  <div class="id-services__banner" id="id-services__banner">
    <img src="@/assets/images/id-about__banner.png" alt="" class="id-banner__img">

    <div class="id-banner__text">
      <h1>Services</h1>

      <div class="id-banner__text__breadcrumb container">
        <router-link to="/">Home</router-link> | <router-link to="/services">Services</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesBannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-services {
  &__banner {
    &__img {
      width: 100%;
    }

    &__text {
      margin-top: 60px;
      width: auto;
      text-align: center;
      z-index: 2;

      &__breadcrumb {
        text-align: left;

        a {
          color: $id-gray;

          &:hover {
            text-decoration: none;
            color: $id-gold;
          }
        }
      }
    }
  }
}
</style>
