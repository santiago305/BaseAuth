import { UnsupportedMediaTypeException } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomBytes } from 'crypto';
import { extname } from 'path';
import { ensureUploadsSubdirectory } from 'src/common/utils/file-upload.util';

const imageMimeTypes = new Set([
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/gif',
]);

const videoMimeTypes = new Set([
  'video/mp4',
  'video/mpeg',
  'video/ogg',
  'video/webm',
  'video/quicktime',
  'video/x-msvideo',
]);

const mediaFieldToFolder: Record<string, string> = {
  poster: 'posters',
  trailer: 'trailers',
  imagenes: 'imagenes',
  videos: 'videos',
};

const storage = diskStorage({
  destination: (_req, file, cb) => {
    const folder = mediaFieldToFolder[file.fieldname] ?? 'otros';
    const destinationPath = ensureUploadsSubdirectory('peliculas', folder);
    cb(null, destinationPath);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = randomBytes(8).toString('hex');
    const extension = extname(file.originalname);
    cb(null, `${Date.now()}-${uniqueSuffix}${extension}`);
  },
});

const fileFilter: Parameters<typeof FileFieldsInterceptor>[1]['fileFilter'] = (_req, file, cb) => {
  const isImageField = file.fieldname === 'poster' || file.fieldname === 'imagenes';
  const isVideoField = file.fieldname === 'trailer' || file.fieldname === 'videos';

  if (isImageField && !imageMimeTypes.has(file.mimetype)) {
    return cb(new UnsupportedMediaTypeException('Solo se permiten imágenes para este campo'), false);
  }

  if (isVideoField && !videoMimeTypes.has(file.mimetype)) {
    return cb(new UnsupportedMediaTypeException('Solo se permiten videos para este campo'), false);
  }

  cb(null, true);
};

export const peliculaMediaUploadInterceptor = FileFieldsInterceptor(
  [
    { name: 'poster', maxCount: 1 },
    { name: 'trailer', maxCount: 1 },
    { name: 'imagenes', maxCount: 10 },
    { name: 'videos', maxCount: 10 },
  ],
  {
    storage,
    fileFilter,
    limits: {
      fileSize: 100 * 1024 * 1024, // 100MB por archivo
    },
  },
);