export interface CounterState {
  counter: number,
  serverName: string
}

export const initialState: CounterState = {
  counter : 0,
  serverName: 'Heroku'
}
