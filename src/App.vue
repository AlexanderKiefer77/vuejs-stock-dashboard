<template>
  <BaseCard>
    <h1>Überschrift</h1>
    <p>Dies ist ein Beispieltext</p>
  </BaseCard>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' // Beispiel für import
import BaseCard from './components/BaseCard.vue';

export default {
  
  name: 'App',
  components: {
    BaseCard
  }
}
</script>

<style>
body {
  margin: 0;  
}

#app {  
  width: 100vw;
  min-height: 100vh;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  padding: 100px;
  box-sizing: border-box;
}
</style>
