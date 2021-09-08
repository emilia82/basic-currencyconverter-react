import { Form } from './Form';
import { Result } from "./Result";
import { Wrapper } from './styled';
import { Clock } from "./Clock";

function App() {

  return (
    <Wrapper>
      <Clock />
      <Form />
      <Result
      />
    </Wrapper>
  );
};

export default App;
