/* eslint-disable @typescript-eslint/naming-convention */

export interface FormProps {
  toDo?: string;
  category?: string;
}

export type Categories = Array<string>;

export interface TodoProps {
  text: string;
  id: number;
  category: string;
}
