<template>
  <BaseCard></BaseCard>
  <TickerCard></TickerCard>
  <RevenueCard></RevenueCard>
  <ChartCard></ChartCard>
  <FooterCard></FooterCard>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' // Beispiel für import
import BaseCard from './components/BaseCard.vue';
import { stockService } from '@/services/stockService';

import RevenueCard from './components/RevenueCard.vue';
import TickerCard from './components/TickerCard.vue';
import ChartCard from './components/ChartCard.vue';
import FooterCard from './components/FooterCard.vue';


export default {
  
  name: 'App',
  components: {
    BaseCard,
    TickerCard,
    RevenueCard,
    ChartCard,
    FooterCard
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

body::-webkit-scrollbar {
  display: none;
}

#app {
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}

</style>

