
<template>
  <div class="id-prices__team" id="id-prices__team">
    <img src="@/assets/images/id-team__banner.png" alt="" class="id-banner__img">

    <div class="id-banner__text">
      <h1>Our Professionals</h1>

      <div class="id-banner__text__breadcrumb container">
        <router-link to="/">Home</router-link> | <router-link to="/team">Team</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamBannerComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-prices {
  &__team {
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
