import React from "react";
import { Card } from "components/Card";
import { Textfield } from "components/Textfield";
import { Scrollbar } from "containers/scrollbar";
import { BrandCheckbox } from "containers/brand-checkbox";
import { Seprator } from "components/Seprator";

interface Props {}

export const Brandfilter = (props: Props) => {
    return (
        <div>
            <Card title="برند ها">
                <Textfield label="جستجو" onChange={(e) => console.log(e)} placeholder="نام کالا، برند و یا ..." />
                <Seprator className="my-3" />
                <Scrollbar className="mt-2">
                    <div className="brands mt-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <BrandCheckbox id={item} onChange={(id, value) => console.log(id, value)} />
                        ))}
                    </div>
                </Scrollbar>
            </Card>
        </div>
    );
};
