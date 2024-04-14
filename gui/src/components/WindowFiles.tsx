import { API } from "../API/APImethod";

export default function WindowFiles({children}: any) {
    
    const getListPrograms = ()=>API.getListPrograms(); //Method what request list files program C#

    return <div id={"background"} className={"bg-black flex w-full h-3"} style={{}}>
        <div id={"Choice"} className={"bg-white rounded relative"}>
            {children}
            
        </div>
    </div>
    
}