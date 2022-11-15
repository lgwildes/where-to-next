import axios from "axios";
import { put } from "redux-saga/effects";

function* featureSaga() {
    try{
       let features =  yield axios.get('api/features') 
        console.log('feature GET response', features)

        yield put({
            type: 'SET_FEATURES',
            payload: features.data
        })
    } catch{
        console.log('error in featureSaga')
    }
}

export default featureSaga;