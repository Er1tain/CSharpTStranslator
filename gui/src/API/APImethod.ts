import axios from "axios";

export class API {
    
    static getListPrograms() {
        axios.get("http://localhost:5123")
            .then(res=>console.log(res.data.lang))
    }


    
}