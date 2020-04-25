import React, { FunctionComponent, ChangeEvent } from "react";
import { Category } from "components/Category";
import { Card } from "components/Card";
import { Textfield } from "components/Textfield";
interface IProps {
    setSearchWord: (text: string) => void;
}
export const SearchInResults: FunctionComponent<IProps> = (props) => {
    const { setSearchWord } = props;
    return (
        <div>
            <Card title="جست و جو در نتایج">
                <Textfield
                    label="جستجو"
                    placeholder="نام کالا، برند و یا ..."
                    onChange={(e) => setSearchWord(e.target.value)}
                />

                <div className="categories">
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                    <Category id={1} text="لورم متن" getId={(e) => alert(e)} />
                </div>
            </Card>
        </div>
    );
};
