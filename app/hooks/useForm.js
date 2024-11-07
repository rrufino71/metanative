import { useState } from "react";

export function useForm(initialData, onValidate) {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //la logica va en el compronente para poder usar el hook form para cualquier formulario
  /*    const handleSubmit = (event) => {
           event.preventDefault()
           const err = onValidate(form)
           
           if (err == null) {
               setLoading(true)
   
           }else{
               setErrors(err)
           }
   
           
       }
   
        */

  return {
    form,
    errors,
    loading,
    setForm,
    setLoading,
    setErrors,
    handleChange,
  };
}
