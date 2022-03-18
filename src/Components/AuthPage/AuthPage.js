import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import styles from './auth.module.css'

const AuthPage = (props) => {
 // const {loggedIn} = props

  return (
    <>

    <LoginForm />

    </>
  );
};

export { AuthPage };