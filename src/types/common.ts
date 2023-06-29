export interface PaginationParams {
    pageSize: number;
    pageNumber:number;
    totalNumber:number
}

export interface ListRespone<T>{
    data:T[];
    pagination: PaginationParams
}

export interface ListParams{
    pageSize:number;
    pageNumber:number
}