<template>
    <div class="characteristics-container">
      <h2>Características</h2>
      <ul>
        <li v-for="char in characteristics" :key="char.id">
          {{ char.versions?.[0]?.displayValue || char.versions?.[0]?.name || 'N/A' }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({ characteristics: Array });
  </script>
  
  <style scoped>
  .characteristics-container {
    border: 1px solid red;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  