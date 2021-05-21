import {createAction, props} from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const addNumber = createAction('addNumber', props<{value: number}>());
export const changeServerName = createAction('changeServerName', props<{serverName: string}>());
