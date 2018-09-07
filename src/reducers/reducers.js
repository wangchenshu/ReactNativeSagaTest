
import { createAction, handleActions } from 'redux-actions'
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
} from '../../actionTypes'

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
  DECREMENT: (state) => state - 1
}, initialState);

export default reducer;