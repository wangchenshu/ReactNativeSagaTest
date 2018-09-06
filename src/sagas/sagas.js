

import { takeEvery, delay } from 'redux-saga'
import { put, call, all } from 'redux-saga/effects'
import { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from '../reducers/reducers'

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: INCREMENT })
}

export function* decrementAsync() {
    yield call(delay, 1000)
    yield put({ type: DECREMENT })
}

function* watchIncrement() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function* watchDecrement() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsync)
}

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ])
}
