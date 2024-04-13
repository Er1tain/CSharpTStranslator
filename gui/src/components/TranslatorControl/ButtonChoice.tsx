import {ButtonProps} from "../interfaces/ButtonProps";

export default function ButtonChoice({onClick}: ButtonProps) {
    
    return <button onClick={onClick} className={"bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"}>
        Выбрать
    </button>
    
}