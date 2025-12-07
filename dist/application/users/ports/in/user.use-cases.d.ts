import { ChangePasswordCommand } from '../../dto/command/change-password.command';
import { CreateUserCommand } from '../../dto/command/create-user.command';
import { DeleteUserCommand } from '../../dto/command/delete-user.command';
import { LoginCommand } from '../../dto/command/login.command';
import { RequestPasswordResetCommand } from '../../dto/command/request-password-reset.command';
import { ResetPasswordCommand } from '../../dto/command/reset-password.command';
import { UpdateUserCommand } from '../../dto/command/update-user.command';
import { GetUserByIdQuery } from '../../dto/query/get-user-by-id.query';
import { ListUsersQuery } from '../../dto/query/list-users.query';
import { LoginResponse } from '../../dto/response/login.response';
import { UserListResponse } from '../../dto/response/user-list.response';
import { UserResponse } from '../../dto/response/user.response';
export declare abstract class ICreateUserUseCase {
    abstract execute(command: CreateUserCommand): Promise<UserResponse>;
}
export declare abstract class IUpdateUserUseCase {
    abstract execute(command: UpdateUserCommand): Promise<UserResponse>;
}
export declare abstract class IDeleteUserUseCase {
    abstract execute(command: DeleteUserCommand): Promise<void>;
}
export declare abstract class IGetUserByIdUseCase {
    abstract execute(query: GetUserByIdQuery): Promise<UserResponse | null>;
}
export declare abstract class IListUsersUseCase {
    abstract execute(query: ListUsersQuery): Promise<UserListResponse>;
}
export declare abstract class ILoginUseCase {
    abstract execute(command: LoginCommand): Promise<LoginResponse>;
}
export declare abstract class ILogoutUseCase {
    abstract execute(token: string): Promise<void>;
}
export declare abstract class IChangePasswordUseCase {
    abstract execute(command: ChangePasswordCommand): Promise<void>;
}
export declare abstract class IRequestPasswordResetUseCase {
    abstract execute(command: RequestPasswordResetCommand): Promise<void>;
}
export declare abstract class IResetPasswordUseCase {
    abstract execute(command: ResetPasswordCommand): Promise<void>;
}
