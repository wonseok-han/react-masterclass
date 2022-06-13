import { TodoProps } from './types';
import { toDoState } from 'atoms';
import { useSetRecoilState } from 'recoil';

const ToDo = ({ text, category, id }: TodoProps) => {
  const setToDos = useSetRecoilState(toDoState);

  const handleClick = (newCategory: TodoProps['category']) => {
    console.log(newCategory);

    setToDos((previous) => {
      const targetIndex = previous.findIndex((todo) => todo.id === id);
      const oldToDo = previous[targetIndex];
      const newToDo = { text, id, category: newCategory };

      console.log(oldToDo, newToDo);

      return previous;
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
