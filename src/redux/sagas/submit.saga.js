import axios from "axios";
import {takeEvery} from 'redux-saga/effects';

function* submit(action) {
    try{
        const response = yield axios.get(`/api/submit/`, {params: action.payload})

    } catch (error) {
        console.log('Error submitting user preferences', error)
    }
}

function* submitSaga() {
    yield takeEvery('SUBMIT_FEATURES', submit)
}

export default submitSaga;