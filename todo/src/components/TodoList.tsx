/* eslint-disable @typescript-eslint/no-misused-promises */

import { Categories } from './types';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { categoryState } from 'atoms';
import { toDoSelector } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);

  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={handleInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export default TodoList;
