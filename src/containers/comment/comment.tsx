import React from "react";
import Image1 from "assets/images/image.png";
import "./comment.scss";

interface Props {}

export const Comment = (props: Props) => {
    return (
        <>
            <div className="comment">
                <div className="row">
                    <div className="col-auto">
                        <img className="comment__image" src={Image1} alt="" />
                    </div>
                    <div className="col comment__content">
                        <div className="comment__reply-wrapper">
                            <div className="comment__author">محمود باقری</div>
                            <div className="comment__reply-text">پاسخ دادن</div>
                        </div>
                        <div className="comment__date">در تاریخ 13 اردیبهشت 1399</div>
                        <div className="comment__body">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment comment--reply">
                <div className="row">
                    <div className="col-auto">
                        <img className="comment__image" src={Image1} alt="" />
                    </div>
                    <div className="col comment__content">
                        <div className="comment__reply-wrapper">
                            <div className="comment__author">محمود باقری</div>
                            <div className="comment__reply-text">پاسخ دادن</div>
                        </div>
                        <div className="comment__date">در تاریخ 13 اردیبهشت 1399</div>
                        <div className="comment__body">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
