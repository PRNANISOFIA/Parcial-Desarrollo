import { Injectable } from '@nestjs/common';
import { PasswordStrengthPolicyPort } from '../../application/users/ports/out/user.ports';

@Injectable()
export class PasswordStrengthPolicyAdapter implements PasswordStrengthPolicyPort {
  isStrong(password: string): boolean {
    if (!password || password.length < 8) return false;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    return hasLower && hasUpper && hasNumber && hasSpecial;
  }

  messageFor(password: string): string {
    if (!password) return 'La contraseña no puede estar vacía';
    if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
    const messages: string[] = [];
    if (!/[a-z]/.test(password)) messages.push('una letra minúscula');
    if (!/[A-Z]/.test(password)) messages.push('una letra mayúscula');
    if (!/[0-9]/.test(password)) messages.push('un número');
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) messages.push('un carácter especial');
    return `La contraseña debe contener ${messages.join(', ')}`;
  }
}

