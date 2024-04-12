import start from '../../images/triangle.png'
import {ButtonProps} from "../interfaces/ButtonProps";

export default function ButtonRun({onClick}: ButtonProps) {
    return <button onClick={onClick} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
        <img src={start} className={"w-7 h-7 rotate-90"}/>
    </button>
}