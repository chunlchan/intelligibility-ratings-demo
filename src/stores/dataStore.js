import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
  const responses= ref([]);
  return { responses }
})
