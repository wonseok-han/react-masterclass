import { categoryListState, toDoState } from 'atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { TodoProps } from './types';
import { setLocalStorage } from 'utils';

const ToDo = ({ text, id }: TodoProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoryListState);
  console.log(categories);
  const handleClick = (newCategory: TodoProps['category']) => {
    setToDos((previous) => {
      const targetIndex = previous.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: newCategory };
      const toDos = [
        ...previous.slice(0, targetIndex),
        newToDo,
        ...previous.slice(targetIndex + 1),
      ];

      setLocalStorage('toDos', toDos);

      return toDos;
    });
  };

  const handleDeleteClick = () => {
    setToDos((previous) => {
      const targetIndex = previous.findIndex((todo) => todo.id === id);
      const toDos = [
        ...previous.slice(0, targetIndex),
        ...previous.slice(targetIndex + 1),
      ];

      setLocalStorage('toDos', toDos);

      return toDos;
    });
  };

  return (
    <li>
      {text}
      {categories.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
      {<button onClick={() => handleDeleteClick()}>Delete</button>}
    </li>
  );
};

export default ToDo;
