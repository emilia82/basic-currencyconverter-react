import Form from './Form';
import { useState } from 'react';
import Container from './Container';
import currencies from './currency';
import { Result } from "./Result";
import "./index.css";


function App() {
  const [result, setResult] = useState();
  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ id }) => id === currency).rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency
    });
  }
  

  return (
    <Container>
    <Form  
    calculateResult={calculateResult}

    />
    <Result 
    result={result}/>
    
    </Container>
  );
};
 


export default App;
