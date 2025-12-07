import type { Request as ExpressRequest } from 'express';
import { IChangePasswordUseCase, ICreateUserUseCase, IDeleteUserUseCase, IGetUserByIdUseCase, IListUsersUseCase, ILoginUseCase, ILogoutUseCase, IRequestPasswordResetUseCase, IResetPasswordUseCase, IUpdateUserUseCase } from '../../../application/users/ports/in/user.use-cases';
import { ChangePasswordRequest } from './dto/change-password.request';
import { CreateUserRequest } from './dto/create-user.request';
import { LoginRequest } from './dto/login.request';
import { RequestPasswordResetRequest } from './dto/request-password-reset.request';
import { ResetPasswordRequest } from './dto/reset-password.request';
import { UpdateUserRequest } from './dto/update-user.request';
import { UserResponse } from '../../../application/users/dto/response/user.response';
import { UserListResponse } from '../../../application/users/dto/response/user-list.response';
import { LoginResponse } from '../../../application/users/dto/response/login.response';
export declare class UsersController {
    private readonly createUserUseCase;
    private readonly updateUserUseCase;
    private readonly deleteUserUseCase;
    private readonly getUserByIdUseCase;
    private readonly listUsersUseCase;
    private readonly loginUseCase;
    private readonly logoutUseCase;
    private readonly changePasswordUseCase;
    private readonly requestPasswordResetUseCase;
    private readonly resetPasswordUseCase;
    constructor(createUserUseCase: ICreateUserUseCase, updateUserUseCase: IUpdateUserUseCase, deleteUserUseCase: IDeleteUserUseCase, getUserByIdUseCase: IGetUserByIdUseCase, listUsersUseCase: IListUsersUseCase, loginUseCase: ILoginUseCase, logoutUseCase: ILogoutUseCase, changePasswordUseCase: IChangePasswordUseCase, requestPasswordResetUseCase: IRequestPasswordResetUseCase, resetPasswordUseCase: IResetPasswordUseCase);
    create(request: CreateUserRequest): Promise<UserResponse>;
    getById(id: string): Promise<UserResponse | null>;
    list(page?: number, pageSize?: number, searchTerm?: string, isActive?: string, role?: string): Promise<UserListResponse>;
    update(id: string, request: UpdateUserRequest): Promise<UserResponse>;
    delete(id: string): Promise<void>;
    login(request: LoginRequest): Promise<LoginResponse>;
    logout(req: ExpressRequest): Promise<{
        message: string;
    }>;
    changePassword(id: string, request: ChangePasswordRequest): Promise<{
        message: string;
    }>;
    requestPasswordReset(request: RequestPasswordResetRequest): Promise<{
        message: string;
    }>;
    resetPassword(request: ResetPasswordRequest): Promise<{
        message: string;
    }>;
}
