import Form from './Form';
import Result from './Result';
import { useState } from 'react';
import Container from './Container';
import { currency } from './currency';
import "./index.css";


function App() {

  const [result, setResult] = useState();
  const calculateResult = (currency, amount) => {
    const rate = currency 
    .find(({ short }) => short === currency)
    .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency
    });
  }

  return (
    <Container>
    <div className="container">
   <Form 
    result={Result}
    calculateResult={calculateResult}

    />
    </div>
    </Container>
  );
};
 


export default App;
