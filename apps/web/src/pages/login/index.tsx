import styles from './index.module.scss';

interface LoginPageProps {
  onLoginIn: () => void;
}

export function LoginPage(props: LoginPageProps) {
  const handleLogin = () => {
    // Enviar usuario y password a la server
    // Si el usuario y password son correctos
    // Guardar el token(llave) en el local storage
    // Llama a la funcion onLoginIn
    props.onLoginIn();
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
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default LoginPage;
