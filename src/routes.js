import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Navegacao from './components/Navegacao';
//import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
/*import Login from './pages/Login';
import Recuperar from './pages/Recuperar';*/


export default function Routes() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Cadastro} />
    </BrowserRouter>
  );
}
