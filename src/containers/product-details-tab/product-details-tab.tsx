import * as React from "react";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import { ProductParams } from "containers/product-params";
import "./product-details-tab.scss";
import { Card } from "components/Card";

export const ProductDetailsTab: React.FunctionComponent = () => {
    return (
        <Card>
            <div className="product-details-tab">
                <Pivot aria-label="Count and Icon Pivot Example" className="tab">
                    <PivotItem headerText="مشخصات" itemCount={42} itemIcon="Equalizer">
                        <ProductParams />
                    </PivotItem>

                    <PivotItem headerText="نظرات کاربران" itemIcon="comment"></PivotItem>
                    <PivotItem headerText="پرسش و پاسخ" itemIcon="Feedback" itemCount={1}></PivotItem>
                </Pivot>
            </div>
        </Card>
    );
};
