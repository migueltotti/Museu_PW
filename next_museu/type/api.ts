export interface ApiResponse<T> {
  status: number;                           // 200, 201, 400, 500
  timestamp: string;                        // ISO 8601 format, e.g., "2024-06-01T12:00:00Z"
  mensagem?: string | null;                 // Usuario cadastrado com sucesso!
  erro?: string | null;                     // Erro no cadastro das informações do usuario.
  errors?: Record<string, string[]> | null; // { "username": ["Username must be at least 5 characters."] }
  path?: string;                            // /api/usuarios
  metodo?: string;                          // POST, GET, PUT, DELETE
  dados?: T | T[] | null;                   // Dados retornados pela API, pode ser um objeto ou uma lista de objetos
  success?: boolean | null;                 // true se status for 2xx, false caso contrário
}

export interface SearchParams{
  page?: number;
  pageSize?: number;
  field?: string;
  sort?: 'ASC' | 'DESC';
  search?: string;
}

export interface PagedResponse<T>{
  content: T[];
  totalPages: number;
  totalElements: number;
  pageSize: number;
  page: number;
  lastPage: number;
} 