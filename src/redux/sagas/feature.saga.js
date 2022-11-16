import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* getResultFeatures() {
    try{
       let features =  yield axios.get('api/features') //get features from database
        console.log('feature GET response', features)

        yield put({
            type: 'SET_FEATURES', //dispatch to feature.reducer
            payload: features.data
        })
    } catch{
        console.log('error in featureSaga')
    }
}

function* featureSaga(){
    yield takeEvery('FETCH_FEATURES', getResultFeatures) //listen for 'FETCH_FEATURES'
}
export default featureSaga;