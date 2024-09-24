import { Credentials } from '@abdala/models';
import { Button, Card, Flex, Form, Input } from 'antd';
import { AxiosError, isAxiosError } from 'axios';
import { useState } from 'react';
import { authClient } from '../../../clients';
import { authenticator } from '../../../lib/Authenticator';



interface LoginPageProps {
  onLoginIn: () => void;
}

export function LoginPage(props: LoginPageProps) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials: Credentials) => {
    try {
      setLoading(true);
      // Enviar usuario y password a la server
      const response = await authClient.login(
        credentials.username,
        credentials.password
      );
      // Si el usuario y password son correctos
      // Guardar el token(llave) en el local storage
      authenticator.signIn(response);
      // Llama a la funcion onLoginIn
      props.onLoginIn();
    } catch (error) {
      console.error('Failed to login', error);

      if (isAxiosError(error)) {
        const _error = error as AxiosError;
        if (_error.response?.status === 400) {
          alert('Credenciales incorrectas');
        } else {
          alert('Ocurrió un error inesperado');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item<Credentials>
            label="Usuario"
            name="username"
            rules={[
              { required: true, message: 'Por favor, escriba el usuario' },
              { type: 'email', message: 'El email no es válido' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Credentials>
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: 'Por favor, escriba el password' },
              {
                min: 8,
                message: 'La contraseña debe tener al menos 7 caracteres',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Button type="link" href="/signup">
        Crear cuenta
      </Button>
    </Flex>
  );
}

export default LoginPage;
