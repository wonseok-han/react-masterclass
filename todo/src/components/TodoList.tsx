/* eslint-disable @typescript-eslint/no-misused-promises */

import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { toDoState } from 'atoms';
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
