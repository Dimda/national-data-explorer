import { put, takeEvery } from 'redux-saga/effects'
import api from 'api'
import {
  FETCH_PREFECTURE_NAMES_PROCESSING,
  FETCH_PREFECTURE_NAMES_SUCCESS,
  FETCH_PREFECTURE_NAMES_FAILED
} from 'store/types'

function * fetchPrefectureNames () {
  try {
    const prefectureNames = yield api.nationalStatistics.fetchPrefectureNames()
    yield put({ type: FETCH_PREFECTURE_NAMES_SUCCESS, prefectureNames })
  } catch (e) {
    yield put({
      type: FETCH_PREFECTURE_NAMES_FAILED,
      error: 'データ取得に問題がありました。しばらくしてからもう一度お試しください。'
    })
    console.error(e)
  }
}

export default function * prefectureDataWatcher () {
  yield takeEvery(FETCH_PREFECTURE_NAMES_PROCESSING, fetchPrefectureNames)
}
