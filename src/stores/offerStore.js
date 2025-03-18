// src/stores/offerStore.js
import { defineStore } from 'pinia';
import ofertas from '../../public/ofertas.json';

export const useOfferStore = defineStore('offerStore', {
  state: () => ({
    offers: [],
    selectedOfferId: null
  }),
  getters: {
    selectedOffer(state) {
      return state.offers.find(offer => offer.id === state.selectedOfferId) || {};
    }
  },
  actions: {
    fetchOffers() {
      this.offers = ofertas;
      if (this.offers.length > 0) {
        this.selectedOfferId = this.offers[0].id; // Ahora se selecciona correctamente el primer ID
      }
    }
  }
});