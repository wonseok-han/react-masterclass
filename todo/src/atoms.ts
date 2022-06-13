/* eslint-disable @typescript-eslint/indent */

import { Categories, TodoProps } from 'components/types';
import { atom, selector } from 'recoil';

export const categoryListState = atom<Categories>({
  key: 'categories',
  default: localStorage.getItem('categories')
    ? [...(JSON.parse(localStorage.getItem('categories')) as Categories)]
    : [],
});

export const categoryState = atom<string>({
  key: 'category',
  default: '',
});

export const categorySelector = selector({
  key: 'categorySelector',
  get: ({ get }) => {
    const category = get(categoryState);
    const categories = get(categoryListState);

    return !category && categories?.length > 0
      ? categories[0]
      : category
      ? category
      : '';
  },
});

export const toDoState = atom<Array<TodoProps>>({
  key: 'toDo',
  default: localStorage.getItem('toDos')
    ? [...(JSON.parse(localStorage.getItem('toDos')) as Array<TodoProps>)]
    : [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categorySelector);

    return toDos.filter((todo) => todo.category === category);
  },
});
