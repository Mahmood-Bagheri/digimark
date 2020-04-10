import React from "react";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import "./brand-checkbox.scss";

interface Props {
    id: string | number;
    onChange: (id: string | number, value: boolean | undefined) => void;
}

export const BrandCheckbox = (props: Props) => {
    const { id, onChange } = props;
    return (
        <div className="brand-checkbox">
            <Checkbox className="brand-checkbox__checkbox" onChange={(ev, value) => onChange(id, value)} />
            <p className="brand-checkbox__label">دی اند جی</p>
            <p className="brand-checkbox__label mr-auto">D&G</p>
        </div>
    );
};
