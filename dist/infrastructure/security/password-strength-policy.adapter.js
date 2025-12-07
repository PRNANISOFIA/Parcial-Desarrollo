"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordStrengthPolicyAdapter = void 0;
const common_1 = require("@nestjs/common");
let PasswordStrengthPolicyAdapter = class PasswordStrengthPolicyAdapter {
    isStrong(password) {
        if (!password || password.length < 8)
            return false;
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
        return hasLower && hasUpper && hasNumber && hasSpecial;
    }
    messageFor(password) {
        if (!password)
            return 'La contraseña no puede estar vacía';
        if (password.length < 8)
            return 'La contraseña debe tener al menos 8 caracteres';
        const messages = [];
        if (!/[a-z]/.test(password))
            messages.push('una letra minúscula');
        if (!/[A-Z]/.test(password))
            messages.push('una letra mayúscula');
        if (!/[0-9]/.test(password))
            messages.push('un número');
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password))
            messages.push('un carácter especial');
        return `La contraseña debe contener ${messages.join(', ')}`;
    }
};
exports.PasswordStrengthPolicyAdapter = PasswordStrengthPolicyAdapter;
exports.PasswordStrengthPolicyAdapter = PasswordStrengthPolicyAdapter = __decorate([
    (0, common_1.Injectable)()
], PasswordStrengthPolicyAdapter);
//# sourceMappingURL=password-strength-policy.adapter.js.map