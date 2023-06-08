
<template>
  <div class="id-home__clients container" id="id-home__clients">
    <div class="row">
      <div class="col-lg-2 col-md-4">
        <img src="@/assets/images/id-home__clients__01.svg" alt="Modern Home">
      </div>

      <div class="col-lg-2 col-md-4">
        <img src="@/assets/images/id-home__clients__02.svg" alt="VS style vintage interior">
      </div>

      <div class="col-lg-2 col-md-4">
        <img src="@/assets/images/id-home__clients__03.svg" alt=" Brand">
      </div>

      <div class="col-lg-2 col-md-4">
        <img src="@/assets/images/id-home__clients__04.svg" alt=" Nature Home">
      </div>
      
      <div class="col-lg-2 col-md-4">
        <img src="@/assets/images/id-home__clients__05.svg" alt=" Classic design studio">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-home {
  &__clients{
    padding-top: 160px ;
    .row{
      justify-content: space-between;
      align-items: center;
      img{
        width: 100%;
      }
    }
    
    @media (max-width: 460px){
        display: none;
    }
  }
}
</style>
