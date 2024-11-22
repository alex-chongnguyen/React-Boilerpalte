export interface IApiResponse<T> {
  success: boolean
  data: T
  error: ErrorResponse
}

export interface ErrorResponse {
  code: number
  message: string
  details?: {
    field: string
    message: string
  }[]
}

export interface IPagingOption {
  number_of_elements: number
  page_number: number
  page_size: number
  total_elements: number
  total_pages: number
}

export type TSortBy = {
  isAscSort?: boolean
  sortField?: string
}

export interface IPaging<T> extends IPagingOption {
  content: T[]
}

export type TApiPagingResponse<T> = IApiResponse<IPaging<T>>

export type TQueryParamsDTO = {
  search_key?: string
  sort_field?: string
  asc_sort?: boolean
  page?: number
  size?: number
}

export type BaseEntity = {
  id: string
  created_at: number
}

export type Entity<T> = {
  [K in keyof T]: T[K]
} & BaseEntity
