import type { AddressListParams } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('addreess', () => {
  const SelectAddress = ref<AddressListParams>()
  const setAddressValue = (item: AddressListParams) => {
    SelectAddress.value = item
  }
  return {
    SelectAddress,
    setAddressValue,
  }
})
