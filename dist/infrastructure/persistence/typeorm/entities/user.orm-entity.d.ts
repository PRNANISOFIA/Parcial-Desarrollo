export declare class UserOrmEntity {
    id: string;
    userName: string;
    email: string;
    passwordHash: string;
    role: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt?: Date | null;
}
