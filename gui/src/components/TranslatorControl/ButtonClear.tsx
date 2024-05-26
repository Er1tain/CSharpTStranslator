

export default function ButtonClear({onClick}: any) {

    const ClearWindows = ()=>{
        onClick({
            "program_text": "",
            "code_leksems": ""
        })
    }

    return <button onClick={ClearWindows} className={"bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"}>
        Очистить
    </button>
}