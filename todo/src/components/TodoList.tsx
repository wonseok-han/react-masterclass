/* eslint-disable @typescript-eslint/no-misused-promises */

import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { toDoSelector } from 'atoms';
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const [toDos, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <hr />
      <h2>To Do</h2>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((doing) => (
          <ToDo key={doing.id} {...doing} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((done) => (
          <ToDo key={done.id} {...done} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
