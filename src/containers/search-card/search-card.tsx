import React, { ChangeEvent, HTMLAttributes } from "react";
import { Card } from "components/Card";
import { Textfield } from "components/Textfield";

interface Props extends HTMLAttributes<HTMLInputElement> {
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchCard = (props: Props) => {
    const { onChange } = props;

    return (
        <Card title="جستجو" className="pb-4">
            <Textfield label="جستجو" placeholder="مقاله مورد نظر خود را جست و جو کنید" onChange={onChange} />
        </Card>
    );
};
