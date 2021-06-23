import React, { useState } from 'react';
import './style.css';
import { currency as currencies } from '../currency';
import Container from '../Container';
import Clock from "../Clock";
import { Result } from "../Result";




const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
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
                    Kalkulator Walutowy
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
                <p className="form__button">
                    <input
                        className="form__button--input submit"
                        type="submit"
                        value="Przelicz!" />
                </p>
            </fieldset>
            <Result
                result={Result}
            />
        </form>
    );
};

export default Form;