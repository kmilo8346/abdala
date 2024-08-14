import { useState, ChangeEvent } from 'react';
import styles from './index.module.scss';

interface Errors {
  email?: string;
  password?: string;
}

interface LoginPageProps {
  onLoginIn: () => void;
}

export function LoginPage(props: LoginPageProps) {
  const handleLogin = () => {
    if (validateForm()) {
      // Enviar usuario y password a la server
      // Si el usuario y password son correctos
      // Guardar el token(llave) en el local storage
      // Llama a la funcion onLoginIn
      props.onLoginIn();
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length === 0) {
      newErrors.password = 'Password is required';
    } else if (password.length <= 7) {
      newErrors.password = 'Password needs at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Tarea
  // Pinta un formulario
  // Con usuario y contraseña
  // Y un boton de enviar
  // El usuario y contraseña se guardan en el estado
  // Validaciones
  // - usuario y contraseña son requeridos
  // - El usuario tiene que ser un email
  // function validateEmail(email) {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(String(email).toLowerCase());
  // }

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formItem}>
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        <button onClick={handleLogin}>Log In</button>
      </div>
      <a href="/signup">Create Account</a>
    </div>
  );
}

export default LoginPage;
