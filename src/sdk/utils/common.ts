export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface PaginatedRequest {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  page?: number;
  size?: number;
  paged?: boolean;
  searchq?: string;
  "sort.sorted"?: boolean;
  "sort.unsorted"?: boolean;
  unpaged?: boolean;
  pagination?: "false" | "true";
}
