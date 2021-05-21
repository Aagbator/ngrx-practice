import {Action, createReducer, on} from "@ngrx/store";
import {CounterState, initialState} from "./counter.state";
import * as CounterActions from "./counter.action";

const _counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(CounterActions.reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(CounterActions.addNumber, (state, props) => {
    return {
      ...state,
      counter: state.counter + props.value
    }
  }),
  on(CounterActions.changeServerName, (state, props) => {
    return {
      ...state,
      serverName: props.serverName
    }
  })
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
