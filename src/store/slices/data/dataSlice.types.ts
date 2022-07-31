export interface IDataState {
  text: string
  error: string
  typed: string
  nextChar: string
  score: {
    bingo: number
    wrong: number
    accuracy: number
    charsPerMin: number
  }
}
