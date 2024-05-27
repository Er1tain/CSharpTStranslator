import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PolishNotation } from './PolishNotation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Routing () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App/>}></Route>
        <Route path="/PolishNotation" element={<PolishNotation/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


root.render(
  <Routing/>
);



