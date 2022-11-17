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

function* fetchFavorites(action) {
    try{
        console.log('getting favorites for', action.payload)
        const favorites = yield axios.get(`/api/favorites`, {params: action.payload})
        console.log('my favorites!', favorites.data)
        yield put ({
            type: 'SET_FAVORITES',
            payload: favorites.data
        })
    } catch(error) {
        console.log('❌Error in favorites.saga fetching favorites', error)
    }
}

function* addFavoriteSaga() {
    yield takeEvery('ADD_FAVORITE', addFavorite)
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)
}

export default addFavoriteSaga;