import { PasswordHasherPort } from '../../application/users/ports/out/user.ports';
export declare class BcryptPasswordHasherAdapter implements PasswordHasherPort {
    private readonly rounds;
    hash(password: string): Promise<string>;
    verify(password: string, hash: string): Promise<boolean>;
}
