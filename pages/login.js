import styles from '../styles/Login.module.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const loginInfo = {
          email: email.current.value,
          password: password.current.value
        }
        const res = await axios.get('http://localhost:3000/api/login');
        console.log(res.data);
      }
      catch(err) {
        console.log(err);
      }
    } else {
      try {
        const signupInfo = {
          email: email.current.value,
          password: password.current.value
        }
        const res = await axios.post('http://localhost:3000/api/signup', signupInfo);
        console.log(res.data);
      }
      catch(err) {
        console.log(err);
      }
    }
  };

  const updateDisplay = () => {
    setIsLogin((prevState) => {
      return !prevState;
    })
  }

  useEffect(() => {
    console.log('!!!', isLogin);
  }, [isLogin])

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={(e) => { handleSubmit(e); }}>
          <div className={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</div>
          <label htmlFor="email">E-mail</label>
          <input className={styles.email} type="text" id="email" ref={email} required />
          <label htmlFor="password">Password</label>
          <input className={styles.password} type="password" id="password" ref={password} required />
          <button className={styles.button}>{isLogin ? 'Login' : 'Sign Up'}</button>
          <div onClick={updateDisplay} className={styles.switch}>{isLogin ? 'Create new account' : 'Login with existing account'}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;