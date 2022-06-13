/* eslint-disable @typescript-eslint/no-misused-promises */

import { FormProps } from './types';
import { categoryListState } from 'atoms';
import { setLocalStorage } from 'utils';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

const CreateCategory = () => {
  const setCategories = useSetRecoilState(categoryListState);
  const { register, handleSubmit, setValue } = useForm<FormProps>();

  const handleValid = (data: FormProps) => {
    setCategories((previous) => {
      const categories = [data.category, ...previous];

      setLocalStorage('categories', categories);

      return categories;
    });

    setValue('category', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('category', {
          required: 'Please write a Category',
        })}
      />
      <button>Add</button>
    </form>
  );
};

export default CreateCategory;
