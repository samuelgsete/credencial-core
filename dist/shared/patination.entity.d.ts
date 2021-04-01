export declare class Pagination {
    items: Array<any>;
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    lastPage: false;
    constructor(_items: Array<any>, _totalItems: number, _currentPage: number);
}
