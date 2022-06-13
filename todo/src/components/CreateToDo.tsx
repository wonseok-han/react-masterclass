/* eslint-disable @typescript-eslint/no-misused-promises */

import { categoryState, toDoState } from 'atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FormProps } from './types';
import { useForm } from 'react-hook-form';

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<FormProps>();

  const handleValid = (data: FormProps) => {
    setToDos((previous) => [
      {
        text: data.toDo,
        id: Date.now(),
        category,
      },
      ...previous,
    ]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
