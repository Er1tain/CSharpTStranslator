import React, {useState} from 'react';
import Window from "./components/Window";
import TranslatorControl from "./components/TranslatorControl";
import SpeedControl from "./components/TranslatorControl/SpeedControl";
import ButtonRun from "./components/TranslatorControl/ButtonRun";
import ButtonChoice from "./components/TranslatorControl/ButtonChoice";
import ButtonStop from "./components/TranslatorControl/ButtonStop";
import WindowFiles from "./components/WindowFiles";
import ButtonClose from "./components/WindowFiles/ButtonClose";
import arrow from './images/arrow.png';

function App() {
    
    const [status_work, changeStatusWork] = useState(false);
    
    const setStateWork = (mode: boolean)=>changeStatusWork(mode);       //visible or hidden window with codes C#
    
    return (
        <div>

            {
                status_work ? <WindowFiles>
                    <ButtonClose onClick={() => setStateWork(false)}/>
                </WindowFiles> : null
            }
            
            <h1 className={'text-center text-xl p-10'}>Translator C# code to TS</h1>

            <div className={'grid grid-cols-2 ml-20'}>
                <Window label={"Исходный код"} className={`bg-blue-950 w-3/4 h-80 rounded`}>
                    <></>
                </Window>
                <Window label={"Результат"} className={'bg-blue-950 w-3/4 h-80 rounded'}>
                    <></>
                </Window>
            </div>
            
            <TranslatorControl>
                <ButtonRun/>
                <ButtonStop/>
                
                <ButtonChoice onClick={()=>{
                    setStateWork(true)
                   
                    }
                }/>
            </TranslatorControl>
        </div>


    );
}

export default App;
