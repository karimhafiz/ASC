// src/components/molecules/LoginForm/LoginForm.js
import React from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className={classes.form}>
      <h1>Sign In</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      {data && data.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" name="username" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Button disabled={isSubmitting}>Login</Button>
      </div>
    </Form>
  );
};

export default LoginForm;
