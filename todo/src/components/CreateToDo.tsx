/* eslint-disable @typescript-eslint/no-misused-promises */

import { FormProps } from './types';
import { toDoState } from 'atoms';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<FormProps>();

  const handleValid = (data: FormProps) => {
    setToDos((previous) => [
      {
        text: data.toDo,
        id: Date.now(),
        category: 'TO_DO',
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
