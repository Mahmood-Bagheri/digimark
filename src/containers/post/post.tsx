import React from "react";
import { Card } from "components/Card";
import Image1 from "assets/images/image.png";

import "./post.scss";
import { Seprator } from "components/Seprator";
import { Comment } from "containers/comment";
import { CommentForm } from "containers/comment-form";

interface Props {}

export const Post = (props: Props) => {
    return (
        <Card className="post">
            <div className="row">
                <div className="col-lg-3">
                    <img className=" post__image" src={Image1} alt="" />
                </div>
                <div className="col-lg-9 post__header">
                    <div className="post__title-wrapper">
                        <div className="d-flex flex-column">
                            <div className="post__title">یک مقاله آزمایشی</div>
                            <div className="post__date">منتشر شده در: 12 اردیبهشت 1399</div>
                        </div>
                        <div className="post__author">نویسنده: محمود باقری</div>
                    </div>
                    <Seprator className="mt-3" />
                    <div className="post__tags">
                        <div className="post__tag">دسته بندی</div>
                        <div className="post__tag">دسته بندی</div>
                        <div className="post__tag">دسته بندی</div>
                        <div className="post__tag">دسته بندی</div>
                        <div className="post__tag">دسته بندی</div>
                        <div className="post__tag">دسته بندی</div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="post__body">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                        وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <Comment />
                </div>
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-8">
                    <CommentForm />
                </div>
            </div>
        </Card>
    );
};
