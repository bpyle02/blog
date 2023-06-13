import { useForm } from 'react-hook-form';

export function Form({ _id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => {
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify({...data, _id}),            
        })
        window.alert("Your comment has been successfully posted! Please refresh the page to view it.")
    })} className='flex flex-col'>
      <p>Name:</p>
      <input {...register('name', { required: true })} className='border-2 border-gray-300 rounded-md outline-none focus:border-[#2570d1] w-72' />
      {errors.name && <p className='text-red-700'>Name is required.</p>}
      <p className='mt-[0.8rem]'>Comment:</p>
      <textarea {...register('text', {required: true})} rows="5" className='border-2 border-gray-300 rounded-md resize-none outline-none focus:border-[#2570d1]' />
      {errors.text && <p className='text-red-700'>Comment is required.</p>}
      <input type="submit" className='bg-[#2570d1] text-white rounded-md p-2 cursor-pointer mt-5 w-32 hover:scale-105 transition-transform duration-200 ease-out' />
    </form>
  );
}