//import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit } = useForm();
 
  const navigate=useNavigate();

  const onSubmit = () => {
    
    navigate("./dashboard")
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Email</label>
          <input type="email" {...register("email")} required />

          <label>Password</label>
          <input type="password" {...register("password")} required />

          <button type="submit" className={styles.button}>
            Login
          </button>
           <Link to="/register">If Not Registered! Click Here</Link>
        </form>
      </div>
    </div>
  );
}