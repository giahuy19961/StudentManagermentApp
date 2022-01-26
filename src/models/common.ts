export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListParams {
  _limit: number;
  _page: number;
  _order: 'asc' | 'desc';
  _sort: string;
  [key: string]: any;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}
