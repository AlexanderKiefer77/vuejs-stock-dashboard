<template>
    <div class="cardRevenue">    
        <div class="revenueLast3Years">
            <h2>Revenue last 3 years</h2>
            <div class="revenueLast3YearsGraph">
                Grafik einfügen
            </div>
        </div>

        <div class="revenueBreakdownMagnificentSeven">
            <h2>Revenue Breakdown Magnificent Seven</h2>
            <div class="revenueBreakdownMagnificentSevenGraph">
                Grafik einfügen
            </div>
        </div>
      
    </div>
    <slot></slot>  
</template>

<script setup>
// aktuell keine Props nötig, alles über Slot gesteuert
</script>

<style scoped>
@font-face {
  font-family: "Raleway";
  src: url("@/assets/fonts/raleway-v34-latin-600.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

.cardRevenue {
    /*background-color: aqua;*/
  width: 1240px;
  height: 352px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px; 
  margin-top: 32px;
  margin-left: 100px;
}

.revenueLast3Years {
    width: 714px;
    height: 352px;
    border-radius: 16px;
    background-color: #011F35;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.revenueLast3Years h2 {
    margin: 0;
    width: 650px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    color: #FFFFFF;
}

.revenueLast3YearsGraph {
    width: 650px;
    height: 270px;
    background-color: cornflowerblue;
}

.revenueBreakdownMagnificentSeven {
    width: 494px;
    height: 352px;
    border-radius: 16px;
    background-color: #011F35;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.revenueBreakdownMagnificentSeven h2 {
    margin: 0;
    width: 385px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    color: #FFFFFF;
}

.revenueBreakdownMagnificentSevenGraph {
    width: 396px;
    height: 260px;
    background-color: cornflowerblue;
}

</style>
