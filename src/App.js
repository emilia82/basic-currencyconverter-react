import Form from './Form';
import { Result } from "./Result";
import "./index.css";
import { Wrapper } from './styled';
import { Form } from "./Form";
import { Clock } from "./Clock";


function App() {

  return (
    <Wrapper>
      <Clock />
      <Form
        calculateResult={calculateResult}
      />
      <Result
        result={result} />

    </Wrapper>
  );
};



export default App;
