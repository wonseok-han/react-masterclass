export interface FormProps {
  toDo: string;
}

export interface TodoProps {
  text: string;
  id: number;
  category: 'DOING' | 'DONE' | 'TO_DO';
}
