import React from 'react';
import Window from "./components/Window";

function App() {
    return (
        <div>
            <h1 className={'text-center text-xl p-10'}>Translator C# code to TS</h1>

            <div className={'grid grid-cols-2'}>
                <Window label={"Исходный код"} className={'bg-blue-950 w-3/4 h-80 rounded'}/>
                <Window label={"Результат"} className={'bg-blue-950 w-3/4 h-80 rounded'}/>
            </div>
        </div>


    );
}

export default App;
