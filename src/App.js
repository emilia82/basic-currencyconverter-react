import React from 'react';
import Form from './Form';
import {Result} from './Result';
import '.index.css';

function App() {
  return (
    <div className="container">
   <Form />
    <p className="form__result">Twój wynik Euro:    
    <strong className="result"></strong></p>
    </div>
  );
}

export default App;
