<template>
  <div class="card">    
      <div class="rectangle1"></div>
      <h1>The Magnificent Seven Companies</h1>
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

.card {
  width: 714px;
  height: 43px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.rectangle1{
  width: 96px;
  height: 32px;
  background-color: #39DAFF;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

h1 {  
  color: #F9F9F9;
  font-size: 36px;
  margin: 0;
  width: 594px;
}
</style>

