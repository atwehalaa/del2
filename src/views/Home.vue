<template>
  <div >
    <Header />
    <Order />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Order from '@/components/Order.vue'
import Header from '@/components/Header.vue'


export default {
  name: 'Home',
  components: {
    Order,
    Header,
   
  }
}
</script>
