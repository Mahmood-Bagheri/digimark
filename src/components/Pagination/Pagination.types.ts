export interface IPagination extends React.HTMLAttributes<HTMLDivElement> {
    perPage: number;
    count: number;
    getCurrent: (e: number) => void;
}
