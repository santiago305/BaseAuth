export interface StoredMediaFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export interface PeliculaMediaFiles {
  poster?: StoredMediaFile[];
  trailer?: StoredMediaFile[];
  imagenes?: StoredMediaFile[];
  videos?: StoredMediaFile[];
}