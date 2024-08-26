import axios from 'axios';

const API_TOKEN = '';

const request = axios.create({
  baseURL: 'http://localhost:3100/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const run = async () => {
  console.log('Test axios arian');

  // Juega con axios
  // Probar el login (public)
  // try {
  //   const response = await request.post('/auth/login', {
  //     username: 'kmilo8346@gmail.com',
  //     password: 'Cojimar123',
  //   });
  //   console.log(response.data);
  //   console.log('Fin de la prueba de autenticacion');
  // } catch (error) {
  //   console.error('Falló la autenticación');
  // }

  // Crear el usuario (public)
  // try {
  //   const response = await axios.post('http://localhost:3100/v1/users', {
  //     name: 'Jhon Doe',
  //     username: 'jhondoe@gmail.com',
  //     password: 'Cojimar123',
  //   });
  //   console.log(response.data);
  //   console.log('Fin de la prueba de creación de usuario');
  // } catch (error) {
  //   console.error('Falló la creación del usuario');
  // }

  // Get all usuarios (private)
  // try {
  //   let from = 0;
  //   let count = 0;
  //   const users: any[] = [];
  //   while (true) {
  //     const response = await request.get('/users', {
  //       // Query params
  //       params: {
  //         from,
  //         size: 1,
  //       },
  //       // Headers
  //       headers: {
  //         Authorization: `Bearer ${API_TOKEN}`,
  //       },
  //     });

  //     // Agregar los usuarios al arreglo
  //     users.push(...response.data.data);

  //     // Incrementar el contador
  //     count += 1;

  //     // Condicion de salida
  //     if (count === response.data.total) {
  //       break;
  //     }

  //     // Incrementar el from
  //     from += 1;
  //   }

  //   console.log(users);
  //   console.log('Fin de la prueba de obtener todos los usuarios');
  // } catch (error) {
  //   console.error('Falló la obtención de todos los usuarios', error);
  // }

  // Eliminar usuario (private)
};

run();
