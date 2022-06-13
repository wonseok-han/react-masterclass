/* eslint-disable @typescript-eslint/no-misused-promises */

import {
  categoryListState,
  categorySelector,
  categoryState,
  toDoSelector,
} from 'atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const TodoList = () => {
  const setCategory = useSetRecoilState(categoryState);
  const category = useRecoilValue(categorySelector);
  const categories = useRecoilValue(categoryListState);
  const toDos = useRecoilValue(toDoSelector);

  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <>
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        Categories
      </h1>
      <hr />
      <br />
      <CreateCategory />
      <br />
      <hr />
      <br />
      <h1
        style={{
          fontSize: '40px',
        }}
      >
        To Dos
      </h1>
      <hr />
      <select value={category} onChange={handleInput}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export default TodoList;
