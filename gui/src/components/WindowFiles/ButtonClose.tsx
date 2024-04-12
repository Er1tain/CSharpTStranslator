import {ButtonProps} from "../interfaces/ButtonProps";


export default function ButtonClose({onClick}: ButtonProps) {
    return <button onClick={onClick} className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}>
        Закрыть
    </button>
}