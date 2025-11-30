<template>
  <BaseCard></BaseCard>
  <SecondCard></SecondCard>
  <RevenueCard></RevenueCard>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' // Beispiel für import
import BaseCard from './components/BaseCard.vue';
import { stockService } from '@/services/stockService';
import SecondCard from './components/SecondCard.vue';
import RevenueCard from './components/RevenueCard.vue';


export default {
  
  name: 'App',
  components: {
    BaseCard,
    SecondCard,
    RevenueCard,
  },
  async created() {
    this.data = await stockService.getRevenue('$AAPL'); //fetchData
    console.log('Loaded data', this.data);
  }
}
</script>

<style>



/* Globaler Body Style */
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
}

#app {
  width: 100vw;
  min-height: 100vh;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}
</style>

