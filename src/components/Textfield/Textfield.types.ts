import { ChangeEvent, InputHTMLAttributes } from "react";

interface IInputBase {
    label?: string | React.ReactNode;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    isMultiline?: true;
}

export interface ITextfield
    extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLDivElement | HTMLTextAreaElement>, keyof IInputBase>,
        IInputBase {}
