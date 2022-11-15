import axios from "axios";

function* submitSaga(action) {
    try{
        yield axios.get('/api/submit', action.payload)

    } catch (error) {
        console.log('Error submitting user preferences', error)
    }
}

export default submitSaga;