
<template>
  <div class="id-team__cards" id="id-team__cards">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__01.jpg" alt="">
          <h3>Isabella Silva</h3>
          <p>CEO | Pará/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__02.jpg" alt="">
          <h3>Sophia Santos</h3>
          <p>CEO | São Paulo/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__03.jpg" alt="">
          <h3>Manuela Oliveira</h3>
          <p>Designer | Minas Gerais/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__04.jpg" alt="">
          <h3>Laura Pereira</h3>
          <p>Designer | Rio de Janeiro/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__05.jpg" alt="">
          <h3>Valentina Watanabe</h3>
          <p>Marketing | São Paulo/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__06.jpg" alt="">
          <h3>Helena Rodrigues</h3>
          <p>Architect | Paraná/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__07.jpg" alt="">
          <h3>Gabriela Carvalho</h3>
          <p>Architect | Fortaleza/Brazil</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <img src="@/assets/images/id-team__08.jpg" alt="">
          <h3>Beatriz Almeida</h3>
          <p>Architect | Mato Grosso/Brazil</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCardsComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-team {
  &__cards {
    margin: 80px 0;

    img{
      width: 100%;
      border-radius: 16px;
      margin-top: 30px;
    }
    h3{
      margin: 20px 0 0;
    }
    
    p{
      font-size: 18px;
    }
  }
}
</style>
