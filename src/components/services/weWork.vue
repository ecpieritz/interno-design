
<template>
  <div class="id-services__work" id="id-services__work">
    <div class="container">
      <div class="row id-services__work__item">
        <div class="col-md-6">
          <img class="id-services__work__item__img" src="@/assets/images/id-services__01.png" alt="">
        </div>
        <div class="col-md-6">
          <div class="id-services__work__item__numb">
            <img src="@/assets/images/icons/id-icon__about-01.png" alt="">
            <h2>01</h2>
          </div>
          <h3>Concept & Details</h3>
          <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. </p>
        </div>
      </div>

      <div class="row reverse-row id-services__work__item">
        <div class="col-md-6">
          <img class="id-services__work__item__img" src="@/assets/images/id-services__02.png" alt="">
        </div>
        <div class="col-md-6">
          <div class="id-services__work__item__numb">
            <img src="@/assets/images/icons/id-icon__about-02.png" alt="">
            <h2>02</h2>
          </div>
          <h3>Idea for Work</h3>
          <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. </p>
        </div>
      </div>

      <div class="row id-services__work__item">
        <div class="col-md-6">
          <img class="id-services__work__item__img" src="@/assets/images/id-services__03.png" alt="">
        </div>
        <div class="col-md-6">
          <div class="id-services__work__item__numb">
            <img src="@/assets/images/icons/id-icon__about-03.png" alt="">
            <h2>03</h2>
          </div>
          <h3>Design</h3>
          <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. </p>
        </div>
      </div>

      <div class="row reverse-row id-services__work__item">
        <div class="col-md-6">
          <img class="id-services__work__item__img" src="@/assets/images/id-services__04.png" alt="">
        </div>
        <div class="col-md-6">
          <div class="id-services__work__item__numb">
            <img src="@/assets/images/icons/id-icon__about-04.png" alt="">
            <h2>04</h2>
          </div>
          <h3>Perfection</h3>
          <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesWorkComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-services {
  &__work {
    margin: 80px 0;

    .container {
      background-color: $id-light;
      border-radius: 20px;
      padding: 80px 60px;

    }

    &__item {
      margin-bottom: 80px;
      
      &:last-child{
        margin-bottom: 0;
      }
      
      &__img {
        width: 100%;

        @media (max-width: 460px){
          display: none;
        }
      }

      &__numb{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        img{
          height: 80px;
        }

        h2{
          color: $id-white;
          font-size: 120px;
        }
      }
      h3{
        margin: 20px 0 40px;
      }
      p{
        width: 75%;
      }

      &.reverse-row{
        flex-direction: row-reverse;

        h3{
          text-align: end;
        }

        p{
          text-align: end;
          float: right;
        }

        @media (max-width: 460px){
          h3,p{
            text-align: left;
            float: left;
          }
        }
      }
      @media (max-width: 460px){
        margin-bottom: 20px;
        p{
          width: 100%;
        }

        h3{
          margin: 10px 0 20px;
        }
      }
    }
  }
}</style>
