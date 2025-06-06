
import { Beer, Comment } from '../types/beer';

export const beers: Beer[] = [
  {
    id: '1',
    name: 'Golden Ale Suprema',
    style: 'Golden Ale',
    abv: 5.2,
    brewery: 'Cervecería del Valle',
    description: 'Una cerveza dorada refrescante con notas cítricas y un final limpio.',
    averageRating: 4.3,
    totalRatings: 127
  },
  {
    id: '2',
    name: 'IPA Tropical Storm',
    style: 'India Pale Ale',
    abv: 6.8,
    brewery: 'Hopsters Brewery',
    description: 'IPA intensa con lúpulos tropicales, notas de mango y maracuyá.',
    averageRating: 4.7,
    totalRatings: 89
  },
  {
    id: '3',
    name: 'Stout Medianoche',
    style: 'Imperial Stout',
    abv: 8.5,
    brewery: 'Cervecería Oscura',
    description: 'Stout robusta con sabores a chocolate oscuro, café y vainilla.',
    averageRating: 4.5,
    totalRatings: 156
  },
  {
    id: '4',
    name: 'Wheat Summer Breeze',
    style: 'Wheat Beer',
    abv: 4.8,
    brewery: 'Campo Dorado',
    description: 'Cerveza de trigo suave y refrescante, perfecta para el verano.',
    averageRating: 4.1,
    totalRatings: 203
  },
  {
    id: '5',
    name: 'Porter del Bosque',
    style: 'Porter',
    abv: 5.9,
    brewery: 'Cervecería Artesanal Norte',
    description: 'Porter equilibrada con toques ahumados y caramelo.',
    averageRating: 4.4,
    totalRatings: 94
  },
  {
    id: '6',
    name: 'Lager Cristalina',
    style: 'Czech Pilsner',
    abv: 4.5,
    brewery: 'Tradición Bohemia',
    description: 'Lager clásica con lúpulos nobles y un amargor equilibrado.',
    averageRating: 4.0,
    totalRatings: 312
  }
];

export const comments: Comment[] = [
  {
    id: '1',
    beerId: '1',
    userName: 'Carlos M.',
    comment: '¡Excelente cerveza! Muy refrescante y con un sabor equilibrado. Perfecta para el verano.',
    rating: 5,
    date: new Date('2024-05-15')
  },
  {
    id: '2',
    beerId: '1',
    userName: 'Ana R.',
    comment: 'Me gustó mucho, aunque esperaba un poco más de cuerpo. Aún así muy buena.',
    rating: 4,
    date: new Date('2024-05-12')
  },
  {
    id: '3',
    beerId: '2',
    userName: 'Miguel S.',
    comment: 'Una IPA espectacular. Los sabores tropicales son increíbles y el amargor está muy bien balanceado.',
    rating: 5,
    date: new Date('2024-05-18')
  },
  {
    id: '4',
    beerId: '2',
    userName: 'Laura P.',
    comment: 'Demasiado intensa para mi gusto, pero reconozco que está muy bien hecha.',
    rating: 3,
    date: new Date('2024-05-10')
  },
  {
    id: '5',
    beerId: '3',
    userName: 'Roberto L.',
    comment: 'La mejor stout que he probado en mucho tiempo. Cremosa y llena de sabor.',
    rating: 5,
    date: new Date('2024-05-20')
  }
];
