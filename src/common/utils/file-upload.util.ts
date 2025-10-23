import { existsSync, mkdirSync } from 'fs';
import { join, relative, sep } from 'path';

const UPLOADS_DIR_NAME = 'uploads';

export const getUploadsRootPath = () => join(process.cwd(), UPLOADS_DIR_NAME);

export const ensureDirectoryExists = (directory: string) => {
  if (!existsSync(directory)) {
    mkdirSync(directory, { recursive: true });
  }
};

export const ensureUploadsRootExists = () => {
  ensureDirectoryExists(getUploadsRootPath());
};

export const ensureUploadsSubdirectory = (...segments: string[]) => {
  const fullPath = join(getUploadsRootPath(), ...segments);
  ensureDirectoryExists(fullPath);
  return fullPath;
};

export const toPublicUploadUrl = (absolutePath: string) => {
  const root = getUploadsRootPath();
  const relativePath = relative(root, absolutePath);

  if (relativePath.startsWith('..')) {
    throw new Error(`The file path "${absolutePath}" is outside of the uploads directory.`);
  }

  const normalized = relativePath.split(sep).join('/');
  return `/${UPLOADS_DIR_NAME}/${normalized}`;
};