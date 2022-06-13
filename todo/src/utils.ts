import { Categories, TodoProps } from 'components/types';

export const setLocalStorage = (
  key: 'categories' | 'toDos',
  list: Array<TodoProps> | Categories
) => {
  localStorage.setItem(key, JSON.stringify(list));
};
