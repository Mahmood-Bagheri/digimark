export interface ICategory {
    text: string;
    id: string | number;
    getId: (id: number | string) => void;
}
