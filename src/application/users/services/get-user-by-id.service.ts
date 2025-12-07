import { Injectable } from '@nestjs/common';
import { UserId } from '../../../domain/users/value-objects/user-id.vo';
import { GetUserByIdQuery } from '../dto/query/get-user-by-id.query';
import { UserResponse } from '../dto/response/user.response';
import { UserMapper } from '../mapper/user.mapper';
import { IGetUserByIdUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';

@Injectable()
export class GetUserByIdService implements IGetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserByIdQuery): Promise<UserResponse | null> {
    const id = UserId.from(query.id);
    const user = await this.userRepository.findById(id);
    return user ? UserMapper.toResponse(user) : null;
  }
}

