import { defineStore } from 'pinia'
import type { Carpooler, Score } from '@/types'

export const useCarpoolingStore = defineStore('carpooling', {
  state: () => ({
    carpoolers: [] as Carpooler[],
    scores: [] as Score[]
  }),
  getters: {
    getDisplayNameById: (state) => (id: string) => {
      return state.carpoolers.find(c => c.id === id)?.displayName
    }
  },
  actions: {
    async refreshCarpoolers() {
      const response: CarpoolerDto[] = await (await fetch('http://localhost:3000/carpoolers')).json()
      this.carpoolers = response.map((dto: CarpoolerDto): Carpooler => {
        return { id: dto.id, displayName: dto.name }
      })
    },
    async refreshScores() {
      const response: Record<string, number> = await (await fetch('http://localhost:3000/credits')).json()
      this.scores = Object.entries(response).map(
        ([carpooler, score]): Score => ({ carpoolerId: carpooler, score })
      )
    }
  }
})

interface CarpoolerDto {
  id: string,
  name: string
}
