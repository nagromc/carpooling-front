import { defineStore } from 'pinia'
import type { Carpooler } from '@/types'

export const useCarpoolersStore = defineStore('carpoolers', {
  state: () => ({
    carpoolers: [] as Carpooler[]
  }),
  actions: {
    refreshCarpoolers() {
      this.carpoolers = fetchData()
    }
  }
})

function fetchData(): Carpooler[] {
  console.log('Fetching carpoolers…')
  const alice: Carpooler = { id: 'alice', displayName: 'Alice' }
  const bob: Carpooler = { id: 'bob', displayName: 'Bob' }
  const charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

  return [alice, bob, charlie]
}
