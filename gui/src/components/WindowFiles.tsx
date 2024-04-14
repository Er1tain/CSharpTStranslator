import { useEffect,useState } from "react";
import axios from "axios";

interface DataUnit {
    lang: string,
    author: string
}

export default function WindowFiles({children}: any) {
    
    

    const [list_program, setListProgram]:[DataUnit, any] =  useState({
        lang: "", author: ""
    });

    useEffect(()=>{
        axios.get("http://localhost:5123")
            .then(res=>setListProgram(res.data))
    },[])


    return <div id={"background"} className={"bg-black flex w-full h-3"} style={{}}>
        <div id={"Choice"} className={"bg-white rounded relative"}>
            {children}
            <p>Язык: {list_program.lang} Автор: {list_program.author}</p>
        </div>
    </div>
    
}