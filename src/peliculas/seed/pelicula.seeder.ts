import { DataSource } from 'typeorm';
import { Pelicula } from 'src/peliculas/entities/pelicula.entity';

export const seedPeliculas = async (dataSource: DataSource) => {
  const peliculaRepo = dataSource.getRepository(Pelicula);

  const peliculasToSeed: Partial<Pelicula>[] = [
    {
      titulo: "Soy Leyenda",
      descripcion:
        "En un futuro devastado por un virus creado para curar enfermedades, la humanidad ha sido prácticamente aniquilada. Los pocos supervivientes se han transformado en criaturas sedientas de sangre que acechan en la oscuridad. En medio del silencio de una Nueva York abandonada, el doctor Robert Neville, último humano inmune conocido, dedica sus días a buscar una cura mientras lucha contra la soledad y la desesperación. Cada noche se convierte en una batalla por sobrevivir y mantener viva la esperanza de que no está completamente solo.",
      fecha_estreno: new Date("2007-12-12"),
      duracion_minutos: 101,
      rating: 3.2,
      idioma: "es",
      poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyvJnCUQGtOt0rpmoo6E-qEd1-1MmQGv9ng&s",
      trailer_url: null,
      deleted: false,
      generos: ["Ciencia ficción", "Drama", "Terror"],
    },
    {
      titulo: "Gladiador",
      descripcion:
        "Máximo Décimo Meridio, un poderoso general romano, es traicionado por el emperador corrupto que asesina a su familia y lo condena a la esclavitud. Convertido en gladiador, su nombre se convierte en leyenda dentro de la arena, mientras planea su venganza contra el Imperio que le arrebató todo. En un viaje marcado por el honor, la pérdida y el sacrificio, Máximo lucha no solo por su redención, sino por devolver la gloria al pueblo de Roma.",
      fecha_estreno: new Date("2000-05-01"),
      duracion_minutos: 155,
      rating: 8.5,
      idioma: "es",
      poster_url: "https://biblioteca.acropolis.org/wp-content/uploads/2015/03/Gladiator.jpg",
      trailer_url: "https://www.youtube.com/watch?v=owK1qxDselE",
      deleted: false,
      generos: ["Acción", "Drama"],
    },
    {
      titulo: "Oppenheimer",
      descripcion:
        "Brillante, atormentado y visionario, J. Robert Oppenheimer lidera el Proyecto Manhattan durante la Segunda Guerra Mundial, enfrentando el desafío de crear la bomba más devastadora jamás concebida. Mientras la ciencia avanza a un ritmo vertiginoso, la moralidad y la conciencia humana se derrumban bajo el peso de la destrucción. Tras el éxito nuclear, Oppenheimer se convierte en un héroe y un paria, atrapado por la culpa de haber desatado un poder capaz de aniquilar a la humanidad.",
      fecha_estreno: new Date("2023-07-17"),
      duracion_minutos: 180,
      rating: 8.4,
      idioma: "es",
      poster_url: "https://m.media-amazon.com/images/M/MV5BNTFlZDI1YWQtMTVjNy00YWU1LTg2YjktMTlhYmRiYzQ3NTVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer_url: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      deleted: false,
      generos: ["Biográfica", "Drama", "Histórica"],
    },
    {
      titulo: "Dune",
      descripcion:
        "En el vasto universo del futuro, el joven Paul Atreides pertenece a una familia noble destinada a gobernar el planeta desértico de Arrakis, la única fuente de la sustancia más preciada del cosmos: la especia melange. Cuando una traición destruye todo lo que ama, Paul y su madre se ven obligados a huir al desierto, donde descubrirán un destino mucho mayor de lo que jamás imaginaron. Entre visiones proféticas, guerras interplanetarias y pueblos oprimidos, Paul deberá aceptar su papel como mesías de un nuevo orden.",
      fecha_estreno: new Date("2021-10-18"),
      duracion_minutos: 155,
      rating: 8.1,
      idioma: "en",
      poster_url: "https://aulanews.uao.es/wp-content/uploads/2024/03/Dune-2021-by-Claire-Curtis.jpg",
      trailer_url: "https://www.youtube.com/watch?v=8g18jFHCLXk",
      deleted: false,
      generos: ["Ciencia ficción", "Aventura", "Drama"],
    },
    {
      titulo: "Avatar",
      descripcion:
        "Jake Sully, un exmarine parapléjico, llega al exuberante mundo de Pandora para reemplazar a su hermano en un programa de avatares que le permite controlar un cuerpo Na’vi. Lo que comienza como una misión militar se transforma en un viaje espiritual cuando conoce a Neytiri y a su pueblo. En medio del conflicto entre la codicia humana y la armonía natural, Jake deberá elegir entre su especie o la vida que ha aprendido a amar.",
      fecha_estreno: new Date("2009-12-13"),
      duracion_minutos: 162,
      rating: 7.8,
      idioma: "es",
      poster_url: "https://i.ebayimg.com/images/g/swYAAOSwObNkv4wa/s-l1200.jpg",
      trailer_url: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      deleted: false,
      generos: ["Ciencia ficción", "Aventura"],
    },
    {
      titulo: "La Matrix",
      descripcion:
        "Thomas Anderson, un programador de día y hacker de noche conocido como Neo, siente que el mundo a su alrededor no es lo que parece. Su búsqueda por la verdad lo lleva a descubrir un secreto estremecedor: la realidad que conoce es una simulación creada por máquinas para mantener a la humanidad bajo control. Con la ayuda de Morfeo y Trinity, Neo se adentrará en la guerra por liberar a la mente humana, enfrentando un destino que lo convertirá en “El Elegido”.",
      fecha_estreno: new Date("1999-03-27"),
      duracion_minutos: 136,
      rating: 8.7,
      idioma: "es",
      poster_url: "https://www.aceprensa.com/wp-content/uploads/1999/07/Matrix.jpg",
      trailer_url: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      deleted: false,
      generos: ["Acción", "Ciencia ficción"],
    },
    {
      titulo: "El Señor de los Anillos: Las Dos Torres",
      descripcion:
        "Separada la Comunidad del Anillo, la guerra se extiende por toda la Tierra Media. Mientras Aragorn, Legolas y Gimli buscan rescatar a sus amigos y unir a los pueblos libres, Frodo y Sam continúan su peligroso viaje hacia Mordor, guiados por la criatura Gollum, cuya lealtad pende de un hilo. Entre batallas épicas, alianzas inesperadas y sacrificios, el destino del mundo depende del valor de los más pequeños.",
      fecha_estreno: new Date("2002-12-14"),
      duracion_minutos: 179,
      rating: 8.7,
      idioma: "es",
      poster_url: "https://m.media-amazon.com/images/M/MV5BOGFkYWJhOGQtODVlOC00OGU2LTgwM2ItZjI0M2Q3NzU5Nzk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer_url: "https://www.youtube.com/watch?v=LbfMDwc4azU",
      deleted: false,
      generos: ["Fantasía", "Aventura"],
    },
    {
      titulo: "Joker",
      descripcion:
        "En una ciudad sumida en la desigualdad y el abandono, Arthur Fleck sobrevive como puede en un mundo que lo ha olvidado. Rechazado por la sociedad y marginado por su propia mente, trabaja como payaso durante el día y sueña con hacer reír al mundo por la noche. Sin embargo, una serie de humillaciones y traiciones lo empujan hacia una espiral de locura imparable. En medio del caos de Gotham, Arthur deja de buscar aceptación y abraza su nueva identidad: el Joker, un símbolo de anarquía, dolor y liberación.",
      fecha_estreno: new Date("2019-09-29"),
      duracion_minutos: 122,
      rating: 8.4,
      idioma: "en",
      poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5miXQvdHu8guhTcIKEqfV3z0_n4i20CqTFA&s",
      trailer_url: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      deleted: false,
      generos: ["Drama", "Crimen", "Psicológica"],
    },
    {
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      descripcion:
        "Cuando el joven hobbit Frodo Bolsón hereda un anillo misterioso, descubre que es el objeto más poderoso del mundo: el Anillo Único, capaz de someter a toda la Tierra Media bajo la sombra de Sauron. Junto a un grupo de héroes de distintas razas y reinos, emprende un viaje peligroso para destruirlo. La Comunidad del Anillo se formará con un propósito común: enfrentar el mal y preservar la libertad de todos los pueblos.",
      fecha_estreno: new Date("2001-12-15"),
      duracion_minutos: 178,
      rating: 8.8,
      idioma: "es",
      poster_url: "https://m.media-amazon.com/images/S/pv-target-images/dd4121e288a8be2de920a92e2e6a9cf3a60b782be028e6c4ca8855437c7c234a.jpg",
      trailer_url: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Fantasía", "Aventura"],
    },
    {
      titulo: "Forrest Gump",
      descripcion:
        "Forrest Gump es un hombre con un corazón puro y una visión inocente del mundo, pero su vida lo llevará a convertirse en testigo —y a veces protagonista— de algunos de los momentos más importantes del siglo XX. Desde la guerra de Vietnam hasta la creación de grandes empresas, su historia es una celebración de la esperanza, el amor y la simpleza con la que ve la vida. En cada paso, Forrest demuestra que no se necesita ser un genio para vivir una vida extraordinaria.",
      fecha_estreno: new Date("1994-07-02"),
      duracion_minutos: 142,
      rating: 8.8,
      idioma: "es",
      poster_url: "https://i.ebayimg.com/images/g/REQAAOSwB09YCplj/s-l400.jpg",
      trailer_url: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Drama", "Romántica"],
    },
    {
      titulo: "Pulp Fiction",
      descripcion:
        "En las calles de Los Ángeles, asesinos a sueldo, boxeadores y criminales se cruzan en un entramado de violencia, humor negro y redención. Cada historia se entrelaza con la otra en una danza caótica y brillante que desafía las reglas del cine tradicional. Con diálogos ingeniosos, personajes inolvidables y giros inesperados, Pulp Fiction redefinió el cine moderno y convirtió lo absurdo en arte.",
      fecha_estreno: new Date("1994-10-09"),
      duracion_minutos: 154,
      rating: 10.0,
      idioma: "es",
      poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXu7FCvhePHJI9S-NXzsDcgkM3pYIn9Io5HSvbLTbrNA_QLP0wvIe2wQdyaRbKjQ4Zho&usqp=CAU",
      trailer_url: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Crimen", "Drama"],
    },
    {
      titulo: "El Caballero de la Noche",
      descripcion:
        "El crimen se desata en Gotham cuando un nuevo enemigo aparece: el Joker, un criminal sin límites que busca sumergir la ciudad en el caos. Batman, junto al teniente Gordon y el fiscal Harvey Dent, intenta restaurar la esperanza y el orden, pero se ve enfrentado a un dilema moral que pondrá a prueba su alma. En una guerra psicológica donde el bien y el mal se confunden, Bruce Wayne deberá decidir hasta dónde está dispuesto a llegar para ser el héroe que Gotham necesita.",
      fecha_estreno: new Date("2008-07-14"),
      duracion_minutos: 152,
      rating: 9.0,
      idioma: "es",
      poster_url: "https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_.jpg",
      trailer_url: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Acción", "Crimen", "Suspenso"],
    },
    {
      titulo: "Interestelar",
      descripcion:
        "En un futuro cercano, la Tierra se está muriendo y la humanidad enfrenta su extinción. Cooper, un ex piloto convertido en granjero, se une a un grupo de exploradores que viajan a través de un agujero de gusano en busca de un nuevo hogar para la especie humana. Mientras atraviesan galaxias, dimensiones y el flujo del tiempo, descubren que el amor puede ser la fuerza más poderosa del universo. Una odisea sobre el sacrificio, la fe y el vínculo eterno entre un padre y su hija.",
      fecha_estreno: new Date("2014-11-02"),
      duracion_minutos: 169,
      rating: 8.6,
      idioma: "es",
      poster_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1i9rNyOsHTHi_-_3RGry36Sv9_1A7N6BVg46gezC9PDuR1VMfSE9UoBXKz5G8RGLZLU&usqp=CAU",
      trailer_url: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Ciencia ficción", "Drama", "Aventura"],
    },
    {
      titulo: "El Origen",
      descripcion:
        "Dom Cobb es un ladrón especializado en el arte del espionaje subconsciente: extraer secretos mientras las personas sueñan. Sin embargo, un encargo imposible cambiará su destino: en lugar de robar una idea, deberá implantar una. Para lograrlo, reúne a un equipo de expertos en sueños y se adentra en un laberinto de realidades donde el tiempo, la memoria y la culpa se entrelazan. A medida que las fronteras entre el sueño y la vigilia se desdibujan, Cobb se enfrenta a su propio pasado para encontrar una salida... o perderse para siempre en su mente.",
      fecha_estreno: new Date("2010-07-12"),
      duracion_minutos: 148,
      rating: 8.8,
      idioma: "es",
      poster_url: "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg",
      trailer_url: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      url_pelicula: "https://vod.api.video/vod/vi2K23yxUfSqIDUbE5d7dY7F/mp4/source.mp4",
      deleted: false,
      generos: ["Ciencia ficción", "Acción", "Suspenso"],
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
