import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';


function* editNote(action) {
    try{
       console.log('😱action.payload is....',action.payload)

        yield axios.put('/api/note/', action.payload)
        
    } catch(error){
        console.log('❌error editing note', error);
    }
}

function* noteSaga(){
    yield takeEvery('EDIT_NOTE', editNote)
}

export default noteSaga;