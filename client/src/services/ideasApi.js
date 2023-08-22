import axios from "axios";

class IdeasApi{
    constructor(){
        this.apiUrl = 'http://localhost:5000/api/ideas'
    }
    getIdeas(){
        return axios.get(this.apiUrl)
    }
}

export default new IdeasApi()