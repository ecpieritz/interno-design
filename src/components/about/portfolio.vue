
<template>
  <div class="id-about__portfolio" id="id-about__portfolio">
    <div class="row">
      <div class="col-lg-6">
        <img src="@/assets/images/id-about__portfolio.png" alt="">
      </div>

      <div class="col-lg-6">
        <h2>The End Result</h2>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
        <router-link to="/portfolio" class="btn dark-btn">
          Our Portfolio
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPortfolioComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-about {
  &__portfolio{
    margin-top: 80px;
    img{
      width: 100%;
    }
    h2{
      margin-top: 20px;
      text-align: end;
    }
    p{
      margin: 30px 0 40px;
      width: 80%;
      text-align: end;
      float: right;
    }
    a{
      float: right;
    }

    @media (max-width: 780px){
      width: 92vw;
      padding: auto 40px;
      .row{
        p, h2{
          width: 100%;
          text-align: left;
        }

        a{
          float: left;
        }
      }
    }
  }
}
</style>
