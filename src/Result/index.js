import React from 'react';
import "../index.css";
import Form from "../Form";
import Container from '../Container';



export const Result = ({ result }) => (
    <p className="form__result">
    Twój wynik Euro:    
    <strong className="result">{result}
        </strong>
        </p>
);

export default Result;