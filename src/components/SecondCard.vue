<template>
    <div class="card2">    
      <h1>2. Abschnitt</h1>
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

.card2 {
  width: 1240px;
  height: 191px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 20px;
  background-color: #023A6233;
  margin-top: 48px;
  margin-left: 100px;
}



h1 {  
  color: #F9F9F9;
  font-size: 36px;
  margin: 0;
}
</style>
