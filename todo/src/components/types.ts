/* eslint-disable @typescript-eslint/naming-convention */
export interface FormProps {
  toDo: string;
}

export enum Categories {
  'DOING' = 'DOING',
  'DONE' = 'DONE',
  'TO_DO' = 'TO_DO',
}

export interface TodoProps {
  text: string;
  id: number;
  category: Categories;
}
