import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { userClient } from '../../../clients';
import { AxiosError, isAxiosError } from 'axios';
import { Button, Card, Flex, Form, Input  } from 'antd';
import { CreateUser } from '@abdala/models';



export function SignupPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  


  const handleCreate = async (CreateUser: CreateUser) => {
    console.log('Handle Create called');
   

      try {
        setLoading(true);
         await userClient.signUp(
          CreateUser.name,
          CreateUser.username,
          CreateUser.password
        );

       

        navigate('/');

        console.log('Form is valid');
      } catch (error) {
        console.error('Failed to sign up', error);
        if (isAxiosError(error)) {
          const _error = error as AxiosError;
          if (_error.response?.status === 400) {
            alert('No fue posible crear su usuario, informaciones incorrectas');
          } else {
            alert('Ocurrió un error inesperado');
            console.log('Form is invalid');
    
          }
        }
        }finally {
          setLoading(false);
      }
      
      // Llamar al backend con la informacion del usuario
      
    } 

  return (
    <Flex
    vertical
    justify='center'
    align='center'
    style={{height: '100vh', width: '100vw'}}
    >
      <Card>
        <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleCreate}
        autoComplete="off"
        >
          <Form.Item
          label='name'
          name='name'
          rules={[
            { required: true, message: 'Por favor, escriba su nombre' },
            { type: 'string' }
          ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
          label='email'
          name='username'
          rules={[
            { required: true, message: 'Por favor, escriba su email' },
            { type: 'email', message: 'El email no es válido' }
          ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
          label='password'
          name='password'
          rules={[
            { required: true, message: 'Por favor, escriba el password' },
            { min: 8, message: 'El password debe tener al menos 8 caracteres' }
          ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
        label="confirm password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor, confirme su password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('El password que escribió no coincide!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Crear Usuario
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}

export default SignupPage;
