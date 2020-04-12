import { ChangeEvent, InputHTMLAttributes } from "react";

interface IInputBase {
    label?: string | React.ReactNode;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextfield
    extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLDivElement>, keyof IInputBase>,
        IInputBase {}
