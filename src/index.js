import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Book} from './Book';
import Books from './templates/book/book'
import {MyMenu} from './templates/menu/menu';
import Login from './templates/Login/login';
import {About} from './templates/About/about'
import Logado from './templates/logado/logado';
import { Page } from './templates/page404/page';
import Adicionar from './templates/adicionar/adicionar'
import Editar from './templates/editar/editar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyMenu/>
    <Switch>
    <Route path="/adicionar" component={Adicionar}/>
      <Route path="/logado/books/:id" component={Editar}/>
      <Route path="/logado" component={Logado}/>
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/books/:id" component={Books}/>
      <Route path="/books" component={Books}/>
      <Route path="/book" component={Book}/>
      <Route path="/" component={App} exact/>
      <Route path="*" component={Page}/>
      
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
