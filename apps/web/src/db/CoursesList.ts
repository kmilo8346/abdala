import HTML from '../assets/cursos/front-end/HTML.png';
import BE from '../assets/cursos/back-end/B-E.png';
import { ICourse } from '../types/ICourse';

const courses: ICourse[] = [
  {
    id: 'FrontEnd',
    name: 'FrontEnd',
    description: 'FrontEnd Es un Curso que ...',
    image_url: HTML,
    modules: [
      {
        name: 'HTML',
        lessons: [
          {
            name: 'Introduccion a HTML',
            image_url: HTML,
          },
          {
            name: 'Entendiendo HTML',
            image_url: HTML,
          },
          {
            name: 'Creando con HTML',
            image_url: HTML,
          },
          {
            name: 'Creando con HTML parte 2',
            image_url: HTML,
          },
        ],
      },
    ],
  },
  {
    id: 'BackEnd',
    name: 'BackEnd',
    description: 'BackEnd Es un Curso que ...',
    image_url: BE,
    modules: [
      {
        name: 'Node',
        lessons: [
          {
            name: 'Introduccion a Node',
            image_url: BE,
          },
          {
            name: 'Entendiendo Node',
            image_url: BE,
          },
          {
            name: 'Creando API',
            image_url: BE,
          },
          {
            name: 'Creando API Parte 2',
            image_url: BE,
          },
        ],
      },
    ],
  },
  {
    id: 'IA',
    name: 'IA',
    description: 'IA Es un Curso que ...',
    image_url: BE,
    modules: [
      {
        name: 'Artificial intelligence',
        lessons: [
          {
            name: 'Introduccion a IA',
            image_url: BE,
          },
          {
            name: 'Entendiendo IA',
            image_url: BE,
          },
          {
            name: 'Creando IA',
            image_url: BE,
          },
          {
            name: 'Creando IA Parte 2',
            image_url: BE,
          },
        ],
      },
    ],
  },
];

export default courses;
