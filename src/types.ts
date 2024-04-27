export class Carpooler {
  id: string;
  displayName: string;

  constructor(id: string, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }
}

export class Score {
  carpooler: Carpooler;
  score: number

  constructor(carpooler: Carpooler, score: number) {
    this.carpooler = carpooler;
    this.score = score;
  }
}
