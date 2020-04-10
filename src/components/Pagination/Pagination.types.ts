export interface IPagination {
    perPage: number;
    count: number;
    getCurrent: (e: number) => void;
}
