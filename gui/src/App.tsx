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
import ButtonClear from './components/TranslatorControl/ButtonClear';
import { Link } from 'react-router-dom';

function App(props: any) {

    //send data to Converter in Polish Notation
    const sendData = ()=> {
        props.sendData(FormatTextProgram(program_and_leksems["code_leksems"]))
    }

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
        text_progam = text_progam.replaceAll("}", "}<br>");

        let list_words_text_progam: string[] = text_progam.split("<br>");


        return list_words_text_progam;
    }

    //Split string of leksems
    const SplitCodeLeksems = (code_leksems: string)=> {

        let result: string[] = code_leksems.split(" ");
        console.log(result);
        return result
    }

    //Vanishing text of leksems
    const [vanish_leksems, setVanishLeksems] = useState(true);

    return (
        <div>
            
                {
                    status_work ? <WindowFiles parentGetData={getDataFromWindowFiles} setStateWork={setStateWork}>
                        <ButtonClose onClick={() => setStateWork(false)}/>
                    </WindowFiles> : null
                }
                
                <h1 className={'text-center text-xl p-10'}>Translator C# code to TS</h1>

                <div className={'grid grid-cols-2 ml-20'}>
                    <Window label={"Исходный код"} className={`Window bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400`}>
                        {program_and_leksems["program_text"] != "" ? FormatTextProgram(program_and_leksems["program_text"]).map((leksem)=>{
                            return <span>{leksem}<br></br></span>
                        }) : <></>}
                    </Window>
                    <Window label={"Лексический анализ"} className={'Window bg-blue-950 w-3/4 h-80 rounded font-bold text-yellow-400'}>
                        {program_and_leksems["code_leksems"] != "" && !vanish_leksems ? SplitCodeLeksems(program_and_leksems["code_leksems"]).map((leksem, i)=>{
                            
                               
                                if (i % 20 == 0 && i > 0) return <span  className='Leksems'>{leksem} <br></br></span>
                                return <span  className='Leksems'>{leksem} </span> 
                            
                        }) : <></>}
                    </Window>
                </div>
            

            <TranslatorControl>
                <ButtonClear onClick={()=>{setPaL({
                        "program_text": "",
                        "code_leksems": ""
                        });
                        setVanishLeksems(true);   
                            }}/>
                <ButtonRun onClick={setVanishLeksems}/>
                
                <ButtonChoice onClick={()=>{
                    setStateWork(true)

                    }
                }/>
                <Link to="/PolishNotation">
                    <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendData}>
                        Обратная польская запись
                    </button>
                </Link>
            </TranslatorControl>
        </div>


    );
}

export default App;
