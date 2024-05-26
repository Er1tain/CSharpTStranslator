import React, {useEffect, useState} from 'react';
import Window from "./components/Window";
import TranslatorControl from "./components/TranslatorControl";
import SpeedControl from "./components/TranslatorControl/SpeedControl";
import ButtonRun from "./components/TranslatorControl/ButtonRun";
import ButtonChoice from "./components/TranslatorControl/ButtonChoice";
import ButtonStop from "./components/TranslatorControl/ButtonStop";
import WindowFiles from "./components/WindowFiles";
import ButtonClose from "./components/WindowFiles/ButtonClose";
import arrow from './images/arrow.png';
import { Context, createContext } from 'vm';

function App() {
    
    const [status_work, changeStatusWork] = useState(false);
    
    const setStateWork = (mode: boolean)=>changeStatusWork(mode);       //visible or hidden window with codes C#
    
    //Get data from WindowFiles
    const [program_and_leksems, setPaL] = useState({
        "program_text": "",
        "code_leksems": ""
    }) 

    //State what save text of program and codes of leksems
    const getDataFromWindowFiles = (childData: any) => {
        setPaL(childData)
    }

    //Format text program
    const FormatTextProgram = (program: string)=>{
        let text_progam: string = program;

        text_progam = text_progam.replaceAll(";", ";<br>");
        text_progam = text_progam.replaceAll("{", "{<br>");
        text_progam = text_progam.replaceAll("}", "}<br>")

        let list_words_text_progam: string[] = text_progam.split("<br>");


        return list_words_text_progam;
    }
   

    return (
        <div>
            
                {
                    status_work ? <WindowFiles parentGetData={getDataFromWindowFiles} setStateWork={setStateWork}>
                        <ButtonClose onClick={() => setStateWork(false)}/>
                    </WindowFiles> : null
                }
                
                <h1 className={'text-center text-xl p-10'}>Translator C# code to TS</h1>

                <div className={'grid grid-cols-2 ml-20'}>
                    <Window label={"Исходный код"} className={`bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400`}>
                        {program_and_leksems["program_text"] != "" ? FormatTextProgram(program_and_leksems["program_text"]).map((leksem)=>{
                            return <span>{leksem}<br></br></span>
                        }) : <></>}
                    </Window>
                    <Window label={"Результат"} className={'bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400'}>
                        {program_and_leksems["code_leksems"] != "" ? program_and_leksems["code_leksems"] : <></>}
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
