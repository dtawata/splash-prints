import styles from '../styles/Login.module.css';
import { useRef } from 'react';
import axios from 'axios';

const Login = (props) => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    const res = await axios.get('http://localhost:3000/api/login');
    console.log(res.data);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={(e) => { handleSubmit(e); }}>
          <label htmlFor="email">E-mail</label>
          <input className={styles.email} type="text" id="email" ref={email} />
          <label htmlFor="password">Password</label>
          <input className={styles.password} type="password" id="password" ref={password} />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;