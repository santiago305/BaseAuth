import { status } from "../constants";
import {
  SuccessResponse,
  ErrorResponse,
  WarningResponse,
  InfoResponse,
  InvalidResponse,
} from "../interfaces/response.interface";

export const successResponse = <T = any>(
  message: string,
  data?: T
): SuccessResponse<T> => ({
  type: status.SUCCESS, // debería ser 'success'
  message,
  data,
});

export const errorResponse = (message): ErrorResponse => ({
  type: status.ERROR, 
  message,
});

export const warningResponse = (message): WarningResponse => ({
  type: status.WARNING,
  message,
});

export const infoResponse = (message): InfoResponse => ({
  type: status.INFO,
  message,
});

export const invalidResponse = (message): InvalidResponse => ({
  type: status.INVALID,
  message,
});
