import { PasswordStrengthPolicyPort } from '../../application/users/ports/out/user.ports';
export declare class PasswordStrengthPolicyAdapter implements PasswordStrengthPolicyPort {
    isStrong(password: string): boolean;
    messageFor(password: string): string;
}
