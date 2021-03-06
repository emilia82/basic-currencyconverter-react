import React, { useState } from 'react';
import { Loading, Failure, Info, Input, LabelText, Header, Button, Fieldset, Copyright } from "./styled";
import { useRatesData } from './useRatesData';
import { Result } from "../Result";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <Fieldset>
                <Header>
                    Kalkulator Walutowy
                </Header>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Sekundka... <br />Ładuję kursy walut z Europejskiego Banku Centralnego
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (

                            <Failure>
                                Hmmm... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <LabelText>Kwota w PLN* </LabelText>

                                        <Input
                                            type="number"
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            placeholder="Wpisz kwotę w zł"
                                            min="0.01"
                                            step="any"
                                            required
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>Waluta: </LabelText>
                                        <Input
                                            as="select"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))}
                                        </Input>
                                    </label>
                                </p>
                                <p>
                                    <Button>Przelicz</Button>
                                </p>
                                <Info>
                                    Kursy walut pobierane są z Europejskiego Banku Centralnego.
                                </Info>
                                <Result result={result} />
                            </>
                        )
                    )},
            </Fieldset>
            <Copyright>
                Copyright - projekt wykonała Emilia Warakomska 2021
            </Copyright>
        </form>
    );
};

export default Form;