import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './shipping.css'
const Shipping = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {user}=useAuth();
  const onSubmit = data => {
    console.log(data);}
  return (
    <div className="form">
     <div>
     <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input placeholder="name" defaultValue={user.displayName} {...register("name")} />
      
    
      <input defaultValue={user.email} placeholder="email" {...register("email", { required: true })} />
   
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="address" defaultValue="" {...register("address")} />
      <input placeholder="phone" defaultValue="" {...register("phone")} />
      <input placeholder="phone number" defaultValue="" {...register("city")} />
      <input type="submit" />
    </form>
     </div>
    </div>
  );
};

export default Shipping;