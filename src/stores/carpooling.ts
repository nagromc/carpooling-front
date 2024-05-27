import { defineStore } from 'pinia'
import type { Carpooler, Score } from '@/types'

export const useCarpoolingStore = defineStore('carpooling', {
  state: () => ({
    carpoolers: [] as Carpooler[],
    scores: [] as Score[]
  }),
  actions: {
    async refreshCarpoolers() {
      const response: CarpoolerDto[] = await (await fetch('http://localhost:3000/carpoolers')).json()
      this.carpoolers = response.map((dto: CarpoolerDto): Carpooler => {
        return { id: dto.id, displayName: dto.name }
      })
    },
    async refreshScores() {
      this.scores = fetchData()

      function fetchData(): Score[] {
        console.log('Fetching scores…')
        const alice: Carpooler = { id: 'alice', displayName: 'Alice' }
        const bob: Carpooler = { id: 'bob', displayName: 'Bob' }
        const charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

        return [
          { carpooler: alice, score: 0.3 },
          { carpooler: bob, score: 0.5 },
          { carpooler: charlie, score: -1 }
        ]
      }
    }
  }
})

interface CarpoolerDto {
  id: string,
  name: string
}
