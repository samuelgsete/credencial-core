export declare class FilterSearch {
    word: string;
    page: number;
    take: number;
    constructor(_word: string, _page: number, _take: number);
    get skip(): number;
}
