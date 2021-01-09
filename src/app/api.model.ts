export interface UserResponse {
  avatar_url: string;
  id: number;
  name: string;
  state: string;
  username: string;
  web_url: string;
}

export interface Filter {
  page?: number;
  search?: string;
}

export interface PaginationConfig {
  page: number;
  prevPage: number;
  nextPage: number;
}
