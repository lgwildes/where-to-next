import axios from "axios";

function* featureSaga() {
    try{
        yield axios.get('api/features') 
        
    } catch{

    }
}