
<template>
  <div class="id-home__testimonial container" id="id-home__testimonial">
    <h2>What the People Thinks About Us</h2>
    <div class="row">
      <div class="col-md-4 id-home__testimonial__person">
        <div class="id-home__testimonial__person__bg">
          <div class="row">
            <div class="col-3">
              <img src="@/assets/images/id-home__testimonial-01.jpg" alt="">
            </div>
            <div class="col-9">
              <h4>Amelia Schmidt</h4>
              <h5>Berlim - Germany</h5>
            </div>
          </div >
          <p>"The interior design team transformed my space into a beautiful and functional sanctuary, exceeding my expectations."</p>
        </div>
      </div>

      <div class="col-md-4 id-home__testimonial__person">
        <div class="id-home__testimonial__person__bg">
          <div class="row">
            <div class="col-3">
              <img src="@/assets/images/id-home__testimonial-02.jpg" alt="">
            </div>
            <div class="col-9">
              <h4>Luca Petrovich</h4>
              <h5>Dublim - Ireland</h5>
            </div>
          </div>
          <p>"Their attention to detail and impeccable sense of style made my home feel like a work of art."</p>
        </div>
      </div>

      <div class="col-md-4 id-home__testimonial__person">
        <div class="id-home__testimonial__person__bg">
          <div class="row">
            <div class="col-3">
              <img src="@/assets/images/id-home__testimonial-03.jpg" alt="">
            </div>
            <div class="col-9">
              <h4>Olivia Dubuois</h4>
              <h5>Porto - Portugal</h5>
            </div>
          </div>
          <p>"From concept to execution, the interior designers delivered a seamless and stunning design that perfectly reflects my personal taste and lifestyle."</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallUsComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-home {
  &__testimonial {
    margin-top: 80px;
    padding: 80px;
    border-radius: 20px;
    background-color: $id-light;

    h2{
      text-align: center;
      margin-bottom: 60px;
    }

    &__person{
      &__bg{
        background-color: $id-white;
        border-radius: 20px;
        padding: 40px 20px 20px;
        height: 100%;

      }
      .row{
        align-items: center;
      }
      img{
        width: 100%;
        border-radius: 12px;
      }
      h4{
        font-family: 'Jost', sans-serif;
        font-weight: 700;
        margin-bottom: 0;
      }
      h5{
        font-weight: 400;
      }
      p{
        margin: 20px 0 0;
      }
    }
  }
}
</style>
