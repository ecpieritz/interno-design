
<template>
  <div class="id-footer container" id="id-footer">
    <div class="row">
      <div class="col-lg-3">
        <img src="@/assets/images/id-logo.png" alt="">
      </div>
      <div class="col-lg-6">
        <h4>Made with 💙 by Emilyn C. Pieritz</h4>
      </div>
      <div class="col-lg-3 id-footer__socials">
        <a class="btn img-btn gold" href="https://www.linkedin.com/in/ecpieritz/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a class="btn img-btn gold" href="https://github.com/ecpieritz" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-footer {
    .row{
      padding: 30px 0;
      align-items: center;
      h4{
        text-align: center;
      }

      img{
        width: 250px;
      }
      
      @media (max-width: 780px){
        img{
          display: none;
        }
        
        h4{
          margin: 20px 0;
          text-align: center;
          width: 100%;
        }
      }
    }
    &__socials{
      display: flex;
      flex-direction: row;
      justify-content: end;

      @media (max-width: 780px){
        justify-content: center;
      }
    }

}
</style>
