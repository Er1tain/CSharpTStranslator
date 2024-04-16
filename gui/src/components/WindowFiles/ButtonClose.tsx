import {ButtonProps} from "../interfaces/ButtonProps";
import crest from '../../images/crest.png';

export default function ButtonClose({onClick}: ButtonProps) {
    return <button id={'close_button'} onClick={onClick} className={"bg-red-500 hover:bg-red-700 text-white " +
        "font-bold py-2 px-4 rounded-xl right-2 top-2"} style={{borderRadius: "40px", width: "max-content"}}>
        <img src={crest} className={"w-3 h-3"}/>
    </button>
}