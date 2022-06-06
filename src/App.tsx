import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [username, setUsername] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    console.log(value);
    setUsername(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(username);
  };

  return (
    <Container>
      <H1>Text</H1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </Container>
  );
}

export default App;
