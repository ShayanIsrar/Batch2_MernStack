// import React, { useState } from "react";

// const Form = () => {
//   const [input, setInput] = useState({ name: "", password: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput((Prev) => ({
//       ...Prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(input);
//   };

//   return (
//     <div className="m-auto text-center mt-9 border border-amber-100 w-80 h-52 bg-amber-100">
//       <form action="" className="mt-12" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           required
//           onChange={handleChange}
//           className="border border-green-300 py-1 mb-5"
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           required
//           onChange={handleChange}
//           className="border border-green-300 py-1 mb-5"
//         />
//         <br />
//         <input
//           type="submit"
//           className="bg-green-500 text-white font-bold px-4 rounded cursor-pointer"
//         />
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  };
  return (
    <div className="m-auto text-center mt-9 border border-amber-100 w-80 h-52 bg-amber-100">
      {isSubmitting && <div>Loading...</div>}
      <form action="" className="mt-12" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: { value: true, message: "This Name is required" },
            minLength: { value: 4, message: "Minimum 4 characters required" },
            maxLength: { value: 7, message: "Maximum 7 characters required" },
          })}
          className="border border-green-300 py-1 mb-5"
        />
        {errors.name && (
          <div className="text-red-600">{errors.name.message}</div>
        )}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", {
            required: { value: true, message: "This Password is required" },
            minLength: { value: 3, message: "Minimum 3 digits required" },
            maxLength: { value: 6, message: "Maximum 6 digits required" },
          })}
          className="border border-green-300 py-1 mb-5"
        />
        {errors.password && (
          <div className="text-red-600">{errors.password.message}</div>
        )}
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 text-white font-bold px-4 rounded cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
