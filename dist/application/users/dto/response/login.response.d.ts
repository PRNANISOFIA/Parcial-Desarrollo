import { UserResponse } from './user.response';
export declare class LoginResponse {
    token: string;
    expiresAt: Date;
    user: UserResponse;
}
