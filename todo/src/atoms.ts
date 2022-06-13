import { TodoProps } from './components/types';
import { atom } from 'recoil';

export const toDoState = atom<Array<TodoProps>>({
  key: 'toDo',
  default: [],
});
