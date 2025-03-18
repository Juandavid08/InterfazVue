<template>
  <div class="container">
    <h1>Gestión de Ofertas</h1>
    
    <div class="offer-section">
      <label for="offer-select">Oferta:</label>
      <select v-model="offerStore.selectedOfferId">
        <option v-for="offer in offerStore.offers" :key="offer.id" :value="offer.id">
          {{ offer.id }} - {{ offer.versions?.[0]?.name || 'Sin Nombre' }}
        </option>
      </select>

      <p>ID Oferta: {{ offerStore.selectedOffer?.id || '' }}</p>
      <p>Nombre: {{ offerStore.selectedOffer?.versions?.[0]?.name || '' }}</p>
    </div>

    <Characteristics :characteristics="offerStore.selectedOffer?.versions?.[0]?.characteristics || []" />
    <Prices :prices="offerStore.selectedOffer?.versions || []" />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useOfferStore } from '@/stores/offerStore';
import Characteristics from '@/components/Characteristics.vue';
import Prices from '@/components/Prices.vue';

const offerStore = useOfferStore();

onMounted(() => {
  offerStore.fetchOffers();
});


watch(() => offerStore.selectedOfferId, () => {
  console.log('Oferta seleccionada:', offerStore.selectedOffer);
});
</script>
