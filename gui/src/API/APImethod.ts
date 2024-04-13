import axios from "axios";

export class API {
    
    static getListPrograms():void {
        axios.get(" http://localhost:5123")
            .then(res=>{
                console.log(res.data)
            })
            .catch((err)=>alert("Server not found("))
        
        
    }
    
}