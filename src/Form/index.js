import React from 'react';
import './style.css';


const Form = () => (
    <form className="form form">
    <fieldset className="form__fieldset">
        <legend className="form__legend">
            Kalkulator Walutowy
        </legend>
        <p className="form__legendText"> /pole oznaczone * jest wymagane </p>
            <label className="form__labelText">
                PLN*
                <input className="input" type="number" min="0.01" step="any" required />
            </label>
            <p className="form__button">
                <input className="form__button--input submit" type="submit" value="Przelicz!" />
            </p>
    </fieldset>

</form>
);

export default Form;