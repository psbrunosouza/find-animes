import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Nav from './components/nav';
import './styles/global.css';
import './styles/card-style.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
