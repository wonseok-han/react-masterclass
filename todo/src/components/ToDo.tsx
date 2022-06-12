import { TodoProps } from './types';

const ToDo = ({ text }: TodoProps) => {
  return (
    <li>
      {text}
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
