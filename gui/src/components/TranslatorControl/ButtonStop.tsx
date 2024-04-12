import {ButtonProps} from "../interfaces/ButtonProps";
import pause from '../../images/pause.png';
export default function ButtonStop({onClick}: ButtonProps) {

    return <button onClick={onClick} className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}>
        <img src={pause} className={"w-7 h-5"}/>
    </button>

}