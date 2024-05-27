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

    </div>
}