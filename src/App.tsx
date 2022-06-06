import { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
