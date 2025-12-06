<template>
    <div class="tickerCard">

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/apple.png" alt="apple logo">  
          <p>Apple</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">38.52</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+1.06</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+2.83</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/meta.png" alt="meta logo">  
          <p>Meta</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">435.57</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>-5.81</p>
                <img src="@/assets/icons/arrowDown.svg" alt="Pfeil nach unten">
              </div>  
              <div class="percentTrend">
                <p>-1.32</p>
                <img src="@/assets/icons/percentRed.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/microsoft.png" alt="microsoft logo">  
          <p>Microsoft</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">409.05</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+1.70</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+2.51</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/google.png" alt="google logo">  
          <p>Google</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">29.87</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+1.70</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+6.04</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/amazon.png" alt="amazon logo">  
          <p>Amazon</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">117.89</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+4.22</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+2.43</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/tesla.png" alt="tesla logo">  
          <p>Tesla</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">177.89</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+4.22</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+2.43</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
        </div>
      </div>

      <div class="tickerFrame">
        <div class="tickerFrameHead">
          <img src="@/assets/icons/nvidia.png" alt="nvidia logo">  
          <p>Nvidia</p>
        </div>
        <div class="tickerFrameGraph">
          <span class="revenueTicker">Revenue Q1 2024</span>          
          <div class="trendTicker">
            <span class="valueTicker">177.89</span>
            <div class="valueTrend">
              <div class="plusMinusTrend">
                <p>+4.22</p>
                <img src="@/assets/icons/arrowUp.svg" alt="Pfeil nach oben">
              </div>  
              <div class="percentTrend">
                <p>+2.43</p>
                <img src="@/assets/icons/percentGreen.svg" alt="Prozent">
              </div>
            </div>
          </div>
          <span class="unitTicker">In Bill USD</span>
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
  src: url("@/assets/fonts/raleway-v34-latin-500.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

.tickerCard {
  width: 1240px;
  height: 191px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*gap: 24px;*/
  border-radius: 20px;
  background-color: #023A6233;
  margin-top: 48px;
  margin-left: 100px;
}

.tickerFrame {
  width: 173px;
  height: 130px;
  border-radius: 16px;
  margin-left: 24px; /*für Abstand zwischen einzelnen Karten*/
  padding-left: 12px;
  color: #FFFFFF;
  background-color: #011F35;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}

.tickerFrame p {
  margin: 0;
}

.tickerFrameHead {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
}

.tickerFrameGraph {
  width: 125px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.revenueTicker {
  font-size: 12px;
  font-weight: 400;
  width: 97px;
  height: 14px;
  margin: 0;
  display: flex;
  align-items: center;
}

.trendTicker {
  /*width: 125px;*/
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.valueTicker {
  font-size: 24px;
  font-weight: 500;
  width: 100px;
  height: 28px;  
}

.valueTrend {
  color: #3BA752;
  font-size: 13px;
  font-weight: 500;
}

.plusMinusTrend {
  width: 54px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.plusMinusTrend img {
  width: 20px;
  height: 20px;
}

.percentTrend {
  width: 54px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.unitTicker {
  font-size: 8px;
  font-weight: 400;
  width: 42px;
  height: 9px;
}

</style>
