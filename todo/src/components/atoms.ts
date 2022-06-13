import { TodoProps } from './types';
import { atom } from 'recoil';

export const toDoState = atom<Array<TodoProps>>({
  key: 'toDo',
  default: [],
});
