
<template>
  <div class="id-about__prices" id="id-about__prices">
    <div class="row">
      <div class="col-lg-6">
        <h2>What We Do</h2>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
        <router-link to="/prices" class="btn dark-btn">
          See Our Prices
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>

      <div class="col-lg-6">
        <img src="@/assets/images/id-about__prices.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPricesComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-about {
  &__prices{
    margin-top: 80px;
    img{
      width: 100%;
    }
    h2{
      margin-top: 20px;
    }
    p{
      margin: 30px 0 40px;
      width: 80%;
    }

    @media (max-width: 780px){
      width: 92vw;
      padding: auto 40px;
      .row{
        display: flex;
        flex-direction: column-reverse;

        p{
          width: 100%;
        }
      }
    }
  }
}
</style>
