import { DataSource } from 'typeorm';
import { Noticia } from 'src/noticias/entities/noticia.entity';

export const seedNoticias = async (dataSource: DataSource) => {
  const noticiaRepo = dataSource.getRepository(Noticia);

  const noticiasToSeed: Partial<Noticia>[] = [
    {
      titulo: 'Denis Villeneuve confirma que “Dune: Messiah” será su última entrega',
      subtitulo: 'El director planea cerrar la saga con una trilogía perfecta.',
      imagen_url: 'https://www.diariovivo.com/wp-content/uploads/2024/12/anya-taylor-joy-en-dune-2.jpeg',
      fecha: new Date('2025-10-10'),
      contenido:
        'Villeneuve ha declarado en entrevistas que planea adaptar “El Mesías de Dune” para completar su visión cinematográfica. El rodaje comenzaría en 2026 con el regreso de Timothée Chalamet y Zendaya.',
      rating: 9.2,
      estado: true,
    },
    {
      titulo: 'Warner prepara nueva trilogía ambientada en la Tierra Media',
      subtitulo: 'Podría centrarse en los orígenes de Sauron y Númenor.',
      imagen_url:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9FgmWuJ9dZln5xG0300ltf0Cz4NdkYcIJuA4zLwqxamKP4K5oKGs7MrnkyrQ1YhXBJy5nSqKZ_3I1viHTE1zCj0JIPy_2Kc1YGZmtALIE48rKiOte572E5Ghwy38MdO7QVN2zEvKx43A0I3tup8YwAqKwDu2dFvh6bP06VkLaqYVd4ATYL6uTMJqM8sf3/s1280/gollum.png',
      fecha: new Date('2025-09-20'),
      contenido:
        'Tras el éxito de “Los Anillos de Poder”, Warner Bros y New Line Cinema habrían acordado desarrollar nuevas películas del universo de Tolkien. No se sabe aún si Peter Jackson estará involucrado.',
      rating: 8.8,
      estado: true,
    },
    {
      titulo: 'Christopher Nolan podría regresar con una secuela espiritual de Interestelar',
      subtitulo: 'Un rumor desde Hollywood indica que Warner busca retomar la colaboración con Nolan.',
      imagen_url:
        'https://www.infobae.com/resizer/v2/2DXZYXGAAFDVZJ5YYEWK7INU4E?auth=3f37d34f3bdfc07d0e40add9e777580ffe93b10c363a458334603e6ab735fe83&smart=true&width=1200&height=900&quality=85',
      fecha: new Date('2025-06-01'),
      contenido:
        'Aún sin confirmación oficial, circulan rumores de que Nolan estaría considerando una secuela espiritual de Interestelar con nuevos personajes y un enfoque más emocional sobre el tiempo y la relatividad.',
      rating: 8.6,
      estado: true,
    },
    {
      titulo: 'Spider-Man 4 podría estar en desarrollo',
      subtitulo: 'Rumores indican que Tom Holland regresará al papel junto a Tobey Maguire y Andrew Garfield.',
      imagen_url: 'https://m.media-amazon.com/images/I/81qG+K228aL._AC_UF894,1000_QL80_.jpg',
      fecha: new Date('2025-10-21'),
      contenido:
        'Fuentes cercanas a Sony y Marvel aseguran que Spider-Man 4 ya está en una fase temprana de planificación. Se especula que el filme explorará el multiverso con la aparición de los tres Spider-Man. Ningún detalle ha sido confirmado oficialmente.',
      rating: 8.7,
      estado: true,
    },
    {
      titulo: 'Primer vistazo oficial a Gladiador II',
      subtitulo: 'Ridley Scott regresa con una secuela esperada por más de 20 años.',
      imagen_url:
        'https://s.france24.com/media/display/778561f6-a5eb-11ef-998e-005056bf30b7/w:1280/p:16x9/Gladiator-e1730050606655.jpg',
      fecha: new Date('2025-09-15'),
      contenido:
        'La secuela de Gladiador está en producción y protagonizada por Paul Mescal. Se espera su estreno para 2025. El filme continuará el legado del general Máximo en una nueva historia ambientada en el Imperio Romano.',
      rating: 9.1,
      estado: true,
    },
    {
      titulo: 'Filtran nuevas imágenes de “Joker: Folie à Deux”',
      subtitulo: 'Lady Gaga y Joaquin Phoenix desatan la locura en las calles de Gotham.',
      imagen_url: 'https://www.rockandpop.cl/wp-content/uploads/2024/02/Copia-de-Copia-de-Foto-Web-1-38-768x432.webp',
      fecha: new Date('2025-08-10'),
      contenido:
        'Durante la filmación en Nueva York, varios fans lograron capturar escenas de Lady Gaga caracterizada como Harley Quinn. La película será un musical psicológico que promete ser aún más impactante que su antecesora.',
      rating: 8.9,
      estado: true,
    },
    {
      titulo: 'Avatar 3 podría explorar un “clan de fuego” en Pandora',
      subtitulo: 'James Cameron confirma una narrativa más oscura y emocional.',
      imagen_url: 'https://www.ecartelera.com/images/noticias/71900/71913-h3.jpg',
      fecha: new Date('2025-07-05'),
      contenido:
        'James Cameron reveló que Avatar 3 mostrará una nueva tribu nativa de Pandora, asociada con el fuego. Se espera que la historia aborde temas de conflicto cultural y ecología. Estreno estimado: diciembre de 2025.',
      rating: 8.4,
      estado: true,
    },
    {
      titulo: 'Warner Bros planea revivir el universo de Nolan',
      subtitulo: 'Un nuevo proyecto ambientado en el universo del “Caballero de la Noche” estaría en discusión.',
      imagen_url: 'https://assets-prd.ignimgs.com/2023/06/14/chris-nolan-1686771618249.png',
      fecha: new Date('2025-09-01'),
      contenido:
        'Rumores en foros de la industria señalan que Warner Bros estaría considerando una miniserie ambientada en el universo de Christopher Nolan, explorando la figura de un nuevo sucesor de Batman.',
      rating: 7.5,
      estado: true,
    },
  ];

  for (const noticia of noticiasToSeed) {
    const exists = await noticiaRepo.findOne({ where: { titulo: noticia.titulo! } });
    if (exists) {
      console.log(`🟡 Noticia "${noticia.titulo}" ya existe, omitiendo...`);
      continue;
    }
    const newNoticia = noticiaRepo.create(noticia);
    await noticiaRepo.save(newNoticia);
    console.log(`✅ Noticia "${noticia.titulo}" creada`);
  }
};
