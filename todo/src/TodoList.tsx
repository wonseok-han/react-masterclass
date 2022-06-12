import { useState } from 'react';

const TodoList = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="write a to do"
          value={value}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
