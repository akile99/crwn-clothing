import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Test() {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState('Pending')
  
  const onStatusChange = (event) => {
    status === 'Pending' ? setStatus('Cleared') : setStatus('Pending')
  }

  const onSubmit = (data, e) => {
    console.log(data.firstName);
    console.log(data.lastName);
    console.log(status)
    e.target.reset();
    setStatus("Pending")
  }

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input name="firstName" ref={register} />
        <input name="lastName" ref={register} />
        <button type="submit">Submit</button>
      </form>
      <button 
          className= 'w-30 link ph3 pv2 dib bg-white' 
          id='CommitTransactionBTN'
          onClick={onStatusChange} 
      >
        {status}
      </button>
    </div>
  );
}

