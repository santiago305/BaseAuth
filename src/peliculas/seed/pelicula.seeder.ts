import { DataSource } from 'typeorm';
import { Pelicula } from 'src/peliculas/entities/pelicula.entity';

export const seedPeliculas = async (dataSource: DataSource) => {
  const peliculaRepo = dataSource.getRepository(Pelicula);

  const peliculasToSeed: Partial<Pelicula>[] = [
    {
      titulo: 'El Origen',
      descripcion: 'Un ladrón roba secretos del subconsciente durante el sueño.',
      fecha_estreno: new Date('2010-07-16'),
      duracion_minutos: 148,
      rating: 8.8,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/inception.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
      deleted: false,
    },
    {
      titulo: 'Interestelar',
      descripcion: 'Exploradores viajan a través de un agujero de gusano en el espacio.',
      fecha_estreno: new Date('2014-11-07'),
      duracion_minutos: 169,
      rating: 8.6,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/interstellar.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
      deleted: false,
    },
    {
      titulo: 'La Matrix',
      descripcion: 'Un hacker descubre la verdad sobre su realidad.',
      fecha_estreno: new Date('1999-03-31'),
      duracion_minutos: 136,
      rating: 8.7,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/matrix.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
      deleted: false,
    },
    {
      titulo: 'El Caballero de la Noche',
      descripcion: 'Batman enfrenta al Joker en Gotham.',
      fecha_estreno: new Date('2008-07-18'),
      duracion_minutos: 152,
      rating: 9.0,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/dark_knight.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
      deleted: false,
    },
    {
      titulo: 'Gladiador',
      descripcion: 'Un general romano busca venganza como gladiador.',
      fecha_estreno: new Date('2000-05-05'),
      duracion_minutos: 155,
      rating: 8.5,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/gladiator.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=owK1qxDselE',
      deleted: false,
    },
    {
      titulo: 'Pulp Fiction',
      descripcion: 'Historias entrelazadas de crimen y redención.',
      fecha_estreno: new Date('1994-10-14'),
      duracion_minutos: 154,
      rating: 8.9,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/pulp_fiction.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
      deleted: false,
    },
    {
      titulo: 'Forrest Gump',
      descripcion: 'La vida extraordinaria de Forrest a través de décadas.',
      fecha_estreno: new Date('1994-07-06'),
      duracion_minutos: 142,
      rating: 8.8,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/forrest_gump.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
      deleted: false,
    },
    {
      titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
      descripcion: 'Un hobbit comienza el viaje para destruir el Anillo Único.',
      fecha_estreno: new Date('2001-12-19'),
      duracion_minutos: 178,
      rating: 8.8,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/lotr_fellowship.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
      deleted: false,
    },
    {
      titulo: 'El Señor de los Anillos: Las Dos Torres',
      descripcion: 'La comunidad dividida enfrenta nuevas batallas.',
      fecha_estreno: new Date('2002-12-18'),
      duracion_minutos: 179,
      rating: 8.7,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/lotr_two_towers.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=LbfMDwc4azU',
      deleted: false,
    },
    {
      titulo: 'El Señor de los Anillos: El Retorno del Rey',
      descripcion: 'La batalla final por la Tierra Media.',
      fecha_estreno: new Date('2003-12-17'),
      duracion_minutos: 201,
      rating: 8.9,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/lotr_return_king.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=r5X-hFf6Bwo',
      deleted: false,
    },
    {
      titulo: 'Avatar',
      descripcion: 'Un marine se adentra en el mundo de Pandora.',
      fecha_estreno: new Date('2009-12-18'),
      duracion_minutos: 162,
      rating: 7.8,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/avatar.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
      deleted: false,
    },
    {
      titulo: 'Oppenheimer',
      descripcion: 'La vida de J. Robert Oppenheimer y el proyecto Manhattan.',
      fecha_estreno: new Date('2023-07-21'),
      duracion_minutos: 180,
      rating: 8.4,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/oppenheimer.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=bK6ldnjE3Y0',
      deleted: false,
    },
    {
      titulo: 'Duna',
      descripcion: 'El viaje de Paul Atreides en Arrakis.',
      fecha_estreno: new Date('2021-10-22'),
      duracion_minutos: 155,
      rating: 8.1,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/dune.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
      deleted: false,
    },
    {
      titulo: 'Joker',
      descripcion: 'La transformación de Arthur Fleck en el Joker.',
      fecha_estreno: new Date('2019-10-04'),
      duracion_minutos: 122,
      rating: 8.4,
      idioma: 'es',
      poster_url: 'https://image.tmdb.org/t/p/w500/joker.jpg',
      trailer_url: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
      deleted: false,
    },
  ];

  for (const p of peliculasToSeed) {
    const exists = await peliculaRepo.findOne({ where: { titulo: p.titulo! } });
    if (exists) {
      console.log(`🟡 Película "${p.titulo}" ya existe, omitiendo...`);
      continue;
    }
    const pelicula = peliculaRepo.create(p);
    await peliculaRepo.save(pelicula);
    console.log(`✅ Película "${p.titulo}" creada`);
  }
};
