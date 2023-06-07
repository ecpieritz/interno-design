<template>
  <div class="id-services">
    <Banner />
    <WeWork />
  </div>
</template>

<script>
import Banner from '@/components/services/banner.vue'
import WeWork from '@/components/services/weWork.vue'
export default {
  name: 'ServicesView',
  components: {
    Banner, WeWork
  }
}
</script>