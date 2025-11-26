<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup>
// aktuell keine Props nötig, alles über Slot gesteuert
</script>

<style scoped>
.card {
  background-color: #011F35;
  border-radius: 16px;
  padding: 24px 32px;
}
</style>

