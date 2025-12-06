<template>
    <div class="footer">    
      <div>
        <p>Hier ist der Footer</p>
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

.footer {
  height: 100px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F9F9F9;
  font-size: 36px;
}

.footer p {
  margin: 0;
}

</style>

