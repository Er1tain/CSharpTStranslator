
export default function WindowFiles({children}: any) {
    
    return <div id={"background"} className={"bg-black flex w-full h-3"} style={{}}>
        <div id={"Choice"} className={"bg-white rounded relative"}>
            {children}
            
        </div>
    </div>
    
}