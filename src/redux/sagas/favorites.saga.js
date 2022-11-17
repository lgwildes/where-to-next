import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';

function* addFavorite(action) {
    try{
        console.log('💖in favorites.saga adding new favorite!', action.payload)
        yield axios.post(`/api/favorites/`, action.payload)

    } catch(error) {
       console.log('❌Error in favorites.saga adding to favorites', error);
    }
}

function* addFavoriteSaga() {
    yield takeEvery('ADD_FAVORITE', addFavorite)
}

export default addFavoriteSaga;