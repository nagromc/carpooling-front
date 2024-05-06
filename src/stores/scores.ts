import { defineStore } from 'pinia'
import type { Carpooler, Score } from '@/types'

export const useScoresStore = defineStore('scores', {
  state: () => ({
    scores: [] as Score[]
  }),
  actions: {
    refreshScores() {
      this.scores = fetchData()
    }
  }
})

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
