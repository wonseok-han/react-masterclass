import { useForm } from 'react-hook-form';

const TodoList = () => {
  const { register, watch } = useForm();

  console.log(watch());
  return (
    <div>
      <form>
        <input {...register('Email')} placeholder="Email" />
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('userName')} placeholder="User Name" />
        <input {...register('password')} placeholder="Password" />
        <input {...register('password1')} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
