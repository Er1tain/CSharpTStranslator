
export default function WindowFiles({children}: any) {
    
    return <div id={"background"} className={"bg-black opacity-65 flex w-full h-3"} style={{}}>
        <div id={"Choice"} className={"flex bg-white opacity-100 rounded"}>
            {children}
            
        </div>
    </div>
    
}