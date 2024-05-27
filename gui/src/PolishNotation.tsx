import { Link } from "react-router-dom";
import App from "./App";
import Window from "./components/Window";

export function PolishNotation() {

    return <div>
        <h1 className={'text-center text-xl p-10'}>Полькая нотация</h1>
        <div className={'grid grid-cols-2 ml-20'}>
            <Window label={"Коды лексем"} className={`Window bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400`}>
                <></>
            </Window>

            <Window label={"Обратная польская запись"} className={`Window bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400`}>
                <></>
            </Window>
        </div>

        <div className="text-center">
            <Link to="/">
                <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                    Лексический анализ
                </button>
            </Link>
            <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-10">
                Перевести
            </button>
            <button className="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-10">
                Синтаксический анализ
            </button>
        </div>

    </div>
}