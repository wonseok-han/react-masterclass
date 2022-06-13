import { Categories, TodoProps } from './types';

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
      {category !== Categories.DOING && (
        <button onClick={() => handleClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={() => handleClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => handleClick(Categories.DONE)}>Done</button>
      )}
    </li>
  );
};

export default ToDo;
