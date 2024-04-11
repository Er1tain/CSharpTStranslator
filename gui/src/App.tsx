import React, {lazy, Suspense, useState} from 'react';
import Window from "./components/Window";
import TranslatorControl from "./components/TranslatorControl";
import SpeedControl from "./components/TranslatorControl/SpeedControl";
import ButtonRun from "./components/TranslatorControl/ButtonRun";
import ButtonChoice from "./components/TranslatorControl/ButtonChoice";
import ButtonStop from "./components/TranslatorControl/ButtonStop";

const WindowFiles = lazy(() : any =>{
    import("./components/WindowFiles");
});
 
function App() {
    
    const [status_work, changeStatusWork] = useState(false);
    
    const setStateWork = (mode: boolean)=>{
        changeStatusWork(mode);
    }
    
    return (
        <div>
            <h1 className={'text-center text-xl p-10'}>Translator C# code to TS</h1>

            <div className={'grid grid-cols-2 ml-20'}>
                <Window label={"Исходный код"} className={'bg-blue-950 w-3/4 h-80 rounded'}/>
                <Window label={"Результат"} className={'bg-blue-950 w-3/4 h-80 rounded'}/>
            </div>

            {
                status_work && <Suspense>
                    <WindowFiles/>
                </Suspense>
            }
            
            <TranslatorControl>
                <ButtonRun onClick={setStateWork(true)}/>
                <ButtonStop/>
                <SpeedControl/>
                <ButtonChoice/>
            </TranslatorControl>
        </div>


    );
}

export default App;
