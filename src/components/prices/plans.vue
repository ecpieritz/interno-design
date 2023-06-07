
<template>
  <div class="id-prices__plans" id="id-prices__plans">
    <div class="container">
      <div class="row">
        <div class="col-md-4 id-prices__plans__item">
          <div class="bg">
            <div class="id-prices__plans__item__top">
              <h3>Design advices</h3>
              <div class="row">
                <h3>$</h3> <h1>29</h1>
              </div>
              <h3>/month</h3>
            </div>
  
            <hr>
  
            <div class="id-prices__plans__item__bottom">
              <p>General living space advices</p>
              <p>Rennovation advices</p>
              <p>Interior design advices</p>
              <p>Furniture reorganization</p>
              <p>Up to 5 hours meetings</p>
  
              <router-link class="btn gold-btn" to="/contact">Get Started <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
            </div>
          </div>

        </div>
        
        <div class="col-md-4 id-prices__plans__item">
          <div class="bg">
            <div class="id-prices__plans__item__top">
              <h3>Complete interior</h3>
              <div class="row">
                <h3>$</h3> <h1 class="id-colors__text__gold">39</h1>
              </div>
              <h3>/month</h3>
            </div>
  
            <hr>
  
            <div class="id-prices__plans__item__most-popular">
              <p>Most Popular Plan</p>
            </div>
  
            <div class="id-prices__plans__item__bottom">
              <p>Complete home redesign</p>
              <p>Interior and exterior works</p>
              <p>Modular interior planning</p>
              <p>Kitchen design</p>
              <p>Garages organization</p>
  
              <router-link class="btn dark-btn" to="/contact">Get Started <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
            </div>
          </div>

        </div>

        <div class="col-md-4 id-prices__plans__item">
          <div class="bg">
            <div class="id-prices__plans__item__top">
              <h3>Furniture design</h3>
              <div class="row">
                <h3>$</h3> <h1>59</h1>
              </div>
              <h3>/month</h3>
            </div>
  
            <hr>
  
            <div class="id-prices__plans__item__bottom">
              <p>Furniture for living room</p>
              <p>Furniture refurbishment</p>
              <p>Sofas and amchairs</p>
              <p>Tables and chairs</p>
              <p>Kitchens</p>
  
              <router-link class="btn gold-btn" to="/contact">Get Started <font-awesome-icon :icon="['fas', 'arrow-right']" /></router-link>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricesPlansComponent',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

.id-prices {
  &__plans {
    margin: 80px 0;
  }
}</style>
