import React, { FunctionComponent } from "react";
import { Category } from "components/Category";
import { Card } from "components/Card";
import { Textfield } from "components/Textfield";

export const SearchInResults: FunctionComponent = (props) => {
    return (
        <div>
            <Card title="جست و جو در نتایج">
                <Textfield label="جستجو" placeholder="نام کالا، برند و یا ..." onChange={(e) => console.log(e)} />

                <div className="categories">
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                </div>
            </Card>
        </div>
    );
};
