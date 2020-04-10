export enum ButtonSize {
    large,
    normal,
}
export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    block?: boolean;
}
