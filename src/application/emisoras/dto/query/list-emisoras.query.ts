export class ListEmisorasQuery {
  page = 1;
  pageSize = 10;
  genero?: string;
  pais?: string;
  banda?: string;
  estado?: string;
  searchTerm?: string;
}
