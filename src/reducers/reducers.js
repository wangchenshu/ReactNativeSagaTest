
import { createAction, handleActions } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC'

const initialState = 10

/*
 * action creator
 */
export const onIncrement = createAction(INCREMENT)
export const onDecrement = createAction(DECREMENT)
export const onIncrementAsync = createAction(INCREMENT_ASYNC)
export const onDecrementAsync = createAction(DECREMENT_ASYNC)

/*
 * reducer
 */
const reducer = handleActions({
  INCREMENT: (state) => state + 1,
  DECREMENT: (state) => state - 1,
  INCREMENT_ASYNC: (state) => state,
  DECREMENT_ASYNC: (state) => state
}, initialState);

export default reducer;