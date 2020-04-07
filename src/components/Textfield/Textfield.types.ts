import { ChangeEvent } from "react";

interface IInputBase {
    label?: string | React.ReactNode;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextfield
    extends Omit<React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement>, keyof IInputBase>,
        IInputBase {}
