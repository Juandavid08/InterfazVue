<template>
  <div class="offer-container">
    <label for="offerSelect">Oferta:</label>
    <select id="offerSelect" v-model="selectedOfferId" @change="updateSelectedOffer">
      <option v-for="offer in offerStore.offers" :key="offer.id" :value="offer.id">
        {{ offer.name }}
      </option>
    </select>

    <div class="offer-details">
      <p><strong>ID Oferta:</strong> {{ offerStore.selectedOffer?.id }}</p>
      <p><strong>Nombre:</strong> {{ offerStore.selectedOffer?.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useOfferStore } from '@/stores/offerStore';

const offerStore = useOfferStore();
const selectedOfferId = ref(offerStore.selectedOffer?.id || '');

const updateSelectedOffer = () => {
  offerStore.selectOffer(selectedOfferId.value);
};

watch(() => offerStore.selectedOffer, (newOffer) => {
  selectedOfferId.value = newOffer?.id || '';
});
</script>

<style scoped>
.offer-container {
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
