"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toResponse(user) {
        return {
            id: user.id.value,
            userName: user.userName.value,
            email: user.email.value,
            role: user.role.value,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt ?? undefined,
        };
    }
    static toList(users, total, page, pageSize) {
        return {
            users: users.map(UserMapper.toResponse),
            totalCount: total,
            page,
            pageSize,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map