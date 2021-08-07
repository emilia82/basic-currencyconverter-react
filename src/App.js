import Form from './Form';
import { useState } from 'react';
import { GlobalStyle} from "./GlobalStyle";
import currencies from './currency';
import { Result } from "./Result";
import "./index.css";
import { Wrapper } from './styled';





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
    <Wrapper>

    <Form  
    calculateResult={calculateResult}

    />
    <Result 
    result={result}/>
    
    </Wrapper>
  );
};
 


export default App;
