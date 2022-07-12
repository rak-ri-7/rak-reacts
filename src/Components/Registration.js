import React from 'react';
import {useForm} from 'react-hook-form';

function Registration() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label> First Name: 
        <input {...register('firstName')}/>
        </label>
        <label>Last Name:
        <input {...register('lastName',{required:true})}/>
        </label>
        {errors.lastName && <p>Last name is required</p>}
        <label>Age:
        <input {...register('age',{pattern: /\d+/})}/>
        </label>
        {errors.age && <p>Please enter number for age</p>}
        <input type="submit" value="submit"/>
    </form>
  )
}

export default Registration