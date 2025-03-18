<template>
    <div class="prices-container">
      <h2>Precios</h2>
      <table>
        <tr>
          <th>Nombre Precio</th>
          <th>Monto</th>
        </tr>
        <tr v-for="price in prices" :key="price.id">
          <td>{{ price.name }}</td>
          <td>{{ price.price?.amount || 0 }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  defineProps({ prices: Array });
  </script>
  
  
  <style scoped>
  .prices-container {
    border: 1px solid red;
    padding: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid red;
    padding: 5px;
  }
  </style>
  