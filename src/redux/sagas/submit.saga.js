import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';

//on submit saga
function* submit(action) {
    try{
        //map through selected features to find IDs
      const idParams =  action.data.features.map(feature => {
            return feature.id
            
        })
        //params object includes boolean for 'true' or 'false' for international/domestic AND all selected feature IDs
        const params = {
            international:action.data.international,
            domestic: action.data.domestic,
            features: idParams
        }
        // console.log('MY NEW PARAMS', params);
        const response = yield axios.get(`/api/submit/`, {params: params})
        yield put({
            //set results of matching destinations in result.reducer.js
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