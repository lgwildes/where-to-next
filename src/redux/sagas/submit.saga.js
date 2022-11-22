import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';

function* submit(action) {
    try{
      const idParams =  action.data.features.map(feature => {
            return feature.id
            
        })
        const params = {
            international:action.data.international,
            domestic: action.data.domestic,
            features: idParams
        }
        console.log('MY NEW PARAMS', params);
        const response = yield axios.get(`/api/submit/`, {params: params})
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