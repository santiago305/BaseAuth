import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

/**
 * DTO para la autenticación de un usuario al hacer login.
 * 
 * Esta clase valida que los datos proporcionados sean correctos antes de procesar el login.
 */
export class LoginAuthDto {

  /**
   * Correo electrónico del usuario. Debe ser una dirección de correo válida.
   */
  @IsString()
  @IsEmail()
  email: string;

  /**
   * Contraseña del usuario. Debe ser una contraseña segura, validada con la regla IsStrongPassword().
   */
  @IsString()
  @IsStrongPassword()
  password: string;
}
