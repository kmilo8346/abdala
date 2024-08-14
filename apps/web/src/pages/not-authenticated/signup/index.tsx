import { useState, ChangeEvent } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  yourName?: string;
}

export function SignupPage() {
  const navigate = useNavigate();
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'password Don`t Match';
    }

    if (yourName.length === 0) {
      newErrors.yourName = 'Name is required';
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
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (name === 'yourName') {
      setYourName(value);
    }
  };

  const handleCreate = () => {
    console.log('Handle Create called');
    if (validateForm()) {
      console.log('Form is valid');
      navigate('/');
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <input
            type="text"
            name="yourName"
            placeholder="Type your name"
            value={yourName}
            onChange={handleChange}
          />
          {errors.yourName && (
            <span className={styles.error}>{errors.yourName}</span>
          )}
        </div>
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
        <div className={styles.formItem}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
        <button onClick={handleCreate}>Create User</button>
      </div>
    </div>
  );
}

export default SignupPage;
