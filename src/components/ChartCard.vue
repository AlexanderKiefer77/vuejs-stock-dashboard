<template>
    <div class="chartCards">    
        <div class="netIncomeTTM">
            <h2>Net Income TTM</h2>
            <div class="netIncomeTTMGraph">
                Grafik einfügen
            </div>
        </div>

        <div class="grossMargin">
            <h2>Gross Margin in % LQ</h2>
            <div class="grossMarginGraph">
                Grafik einfügen
            </div>
        </div>

        <div class="revenueGrowth">
            <h2>Revenue Growth in % YoY</h2>
            <div class="revenueGrowthGraph">
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

.chartCards {
  width: 1240px;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px; 
  margin-top: 32px;
  margin-left: 100px;
}



.netIncomeTTM {
    width: 392px;
    height: 296px;
    border-radius: 16px;
    background-color: #011F35;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.netIncomeTTM h2 {
    margin: 0;
    width: 352px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    color: #FFFFFF;
}

.netIncomeTTMGraph {
    width: 352px;
    height: 215px;
    background-color: cornflowerblue;
}



.grossMargin {
    width: 293px;
    height: 296px;
    border-radius: 16px;
    background-color: #011F35;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.grossMargin h2 {
    margin: 0;
    width: 253px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    color: #FFFFFF;
}

.grossMarginGraph {
    width: 253px;
    height: 209px;
    background-color: cornflowerblue;
}



.revenueGrowth {
    width: 491px;
    height: 296px;
    border-radius: 16px;
    background-color: #011F35;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.revenueGrowth h2 {
    margin: 0;
    width: 451px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    color: #FFFFFF;
}

.revenueGrowthGraph {
    width: 451px;
    height: 209px;
    background-color: cornflowerblue;
}

</style>
