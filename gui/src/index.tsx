import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PolishNotation } from './PolishNotation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


function Routing () {

  const [data_for_PN_Converter, sendDataPNConverter] = useState([""]); 

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App sendData={sendDataPNConverter}/>}></Route>
        <Route path="/PolishNotation" element={<PolishNotation code_leksems={data_for_PN_Converter}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


root.render(
  <Routing/>
);



