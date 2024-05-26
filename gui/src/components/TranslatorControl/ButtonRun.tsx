import start from '../../images/triangle.png'

export default function ButtonRun({onClick}: any) {

    const setVisible = ()=> {
        onClick(false)
    }

    return <button onClick={setVisible} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
        <img src={start} className={"w-7 h-7 rotate-90"}/>
    </button>
}