export class ListUsersQuery {
  page = 1;
  pageSize = 10;
  searchTerm?: string;
  isActive?: boolean;
  role?: string;
}

