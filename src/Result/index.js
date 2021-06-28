import React from 'react';
import "../index.css";


export const Result = ({ result }) => (
    result !== undefined && (
    <p className="form__result">
    Twój Wynik:    
    <strong className="result">  {result.targetAmount.toFixed(2)} &nbsp;{result.currency}
        </strong>
        </p>
));



