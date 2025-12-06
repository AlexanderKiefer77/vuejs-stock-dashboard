<template>
    <div class="cardRevenue">    
        <div class="revenueLast3Years">
            <h2>Revenue last 3 years</h2>
            <img src="@/assets/graphs/graphicLabel.png" alt="Grafik Revenue last 3 Years">
        </div>

        <div class="revenueBreakdownMagnificentSeven">
            <img src="@/assets/graphs/revenueBreakdown.png" alt="Grafik Revenue Breakdown Magnificent Seven">
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
  width: 1240px;
  height: 352px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px; 
  margin-top: 32px;
  margin-left: 100px;
}

/* #################################################### */
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

.revenueLast3Years img {
    width: 650px;
    height: 270px;
}

/* #################################################### */
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

.revenueBreakdownMagnificentSeven img {
    width: 396px;
    height: 300px;
}

</style>
