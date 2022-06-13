import { TodoProps } from './types';
import { toDoState } from 'atoms';
import { useSetRecoilState } from 'recoil';

const ToDo = ({ text, category, id }: TodoProps) => {
  const setToDos = useSetRecoilState(toDoState);

  const handleClick = (newCategory: TodoProps['category']) => {
    setToDos((previous) => {
      const targetIndex = previous.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: newCategory };

      return [
        ...previous.slice(0, targetIndex),
        newToDo,
        ...previous.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      {text}
      {category !== 'DOING' && (
        <button onClick={() => handleClick('DOING')}>Doing</button>
      )}
      {category !== 'TO_DO' && (
        <button onClick={() => handleClick('TO_DO')}>To Do</button>
      )}
      {category !== 'DONE' && (
        <button onClick={() => handleClick('DONE')}>Done</button>
      )}
    </li>
  );
};

export default ToDo;
