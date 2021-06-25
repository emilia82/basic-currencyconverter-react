import React, { useState } from 'react';
import './style.css';
import currencies  from '../currency';

import Clock from "../Clock";



const Form = ({ calculateResult}) => {
    const [currency, setCurrency] = useState(currencies[0].id);
    const [amount, setAmount] = useState("");

    
    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <Clock />
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Kalkulator Walutowy - przelicza PLN na EUR
                </legend>

                <p className="form__legendText"> /pole oznaczone * jest wymagane </p>
                <label className="form__labelText">
                    PLN*
                    <input
                        className="input"
                        type="number"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwotę w zł"
                        min="0.01"
                        step="any"
                        required />
               </label>
               <label className="form__labelText">
                   <select className="input"

                   value={currency}
                   onChange={({ target }) => setCurrency(target.value)}
                   >
                       {currencies.map((currency) => (
                           <option kedy={currency.id} value={currency.id}>
                               {currency.name}
                           </option>
                       ))}
                   </select>
               </label>
             <p className="form__button">
                    <input
                        className="form__button--input submit"
                        type="submit"
                        value="Przelicz!" />
                </p>
            </fieldset>
      
      
        </form>
    );
};

export default Form;