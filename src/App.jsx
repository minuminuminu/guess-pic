import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Gamebox } from "./components/Gamebox";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  margin: 15px;
`;

function App() {
  const { register, handleSubmit } = useForm();

  const guess = (data) => {
    console.log(data);
  };

  return (
    <Body>
      <Gamebox></Gamebox>
      <form onSubmit={handleSubmit(guess)}>
        <Input type="text" {...register("guessStr", { required: true })} />
        <button>Guess</button>
      </form>
    </Body>
  );
}

export default App;
