import { defineStore } from 'pinia'
import type { Carpooler } from '@/types'

export const useCarpoolersStore = defineStore('carpoolers', {
  state: () => ({
    carpoolers: [] as Carpooler[]
  }),
  actions: {
    async refreshCarpoolers() {
      const response = await (await fetch('http://localhost:3000/carpoolers')).json()
      this.carpoolers = response.map((dto: CarpoolerDto): Carpooler => {
        return { id: dto.id, displayName: dto.name }
      })
    }
  }
})

interface CarpoolerDto {
  id: string,
  name: string
}
