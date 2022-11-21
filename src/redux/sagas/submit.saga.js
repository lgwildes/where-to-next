import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';

function* submit(action) {
    try{
        const response = yield axios.get(`/api/submit/`, {params: action.data})
        yield put({
            type:'SET_RESULTS',
            payload: response
        })

    } catch (error) {
        console.log('❌Error in submit.saga submitting user preferences', error)
    }
}

function* submitSaga() {
    yield takeEvery('SUBMIT_FEATURES', submit)
}

export default submitSaga;