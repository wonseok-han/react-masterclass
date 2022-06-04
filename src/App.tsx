import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  // NOTE: props
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;

  :hover {
    background-color: black;
  }
`;

// NOTE: extends
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// Component Attribute
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      {/* <Box color="teal" />
      <Circle color="tomato" /> */}
      <Btn>Log in</Btn>
      {/* Component alias */}
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input required={true} />
    </Father>
  );
}

export default App;
