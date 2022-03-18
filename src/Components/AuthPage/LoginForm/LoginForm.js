import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './loginForm.module.css'


const LoginForm = () => {
  const dispatch = useDispatch()
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required')
    }),
    onSubmit: (values) => {
      //dispatch(loginAC({ payload: values}));
    }
  });
  return (
    <div className={styles.container}>
      <h2> Авторизация </h2>
    <form onSubmit={loginFormik.handleSubmit} autoComplete='off' >
      <label> Email </label>
      <input
        id={'email'}
        name={'email'}
        type={'email'}
        placeholder={'Email...'}
        onChange={loginFormik.handleChange}
        value={loginFormik.values.email}

      />
      <label> Пароль </label>
      <input
        id={'password'}
        name={'password'}
        type={'password'}
        placeholder={'Password...'}
        onChange={loginFormik.handleChange}
        value={loginFormik.values.password}
        autoComplete='off'
      />
      <button type={"submit"}> Войти  </button>
    </form>
    </div>
  );
};

export { LoginForm };