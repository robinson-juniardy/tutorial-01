import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setIsAuth } = useContext(UserContext);
  const ValidationForm = yup.object().shape({
    username: yup.string("harus huruf").required("harus di isi"),
  });
  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      form.resetForm();
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    },
    validationSchema: ValidationForm,
  });
  return (
    <form onSubmit={form.handleSubmit} onReset={form.handleReset}>
      username :
      <input
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />
      <br />
      password:
      <input
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.handleChange}
      />
      <br />
      <button type="submit">Login</button>
      <button type="reset">reset</button>
    </form>
  );
};

export default Login;
