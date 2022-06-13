import { atom, selector } from 'recoil';

import { TodoProps } from './components/types';

export const toDoState = atom<Array<TodoProps>>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((todo) => todo.category === 'TO_DO'),
      toDos.filter((todo) => todo.category === 'DOING'),
      toDos.filter((todo) => todo.category === 'DONE'),
    ];
  },
});
