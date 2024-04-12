import axios from "axios";

export class API {
    
    static getTextProgram() {
        axios.get("http://localhost:5123/Home/Index").then(res=>console.log(res))
            .catch((err)=>alert("Север не ответил("));
    }
    
}