export interface Carpooler {
  id: string
  displayName: string
}

export interface Score {
  carpooler: Carpooler
  score: number
}
