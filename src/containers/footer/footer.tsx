import React from "react";
import { FooterLinks } from "containers/footer-links";
import { TermsText } from "containers/terms-text";
import { Textfield } from "components/Textfield";
import "./footer.scss";

interface Props {}

export const Footer = (props: Props) => {
    return (
        <>
            <div className="footer pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <img className="footer__logo" src="/assets/images/icons/icon-fa.svg" alt="" />
                            <div className="footer__text">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                                نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
                                در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </div>
                            <div className="footer__description mt-3 row">
                                <div className="text col-12 col-md-4">
                                    ما هر روز از ساعت 9 تا 18 تو دفترمون هستیم و تقریبا 24 ساعته تو فضای مجازی آنلاینیم
                                </div>
                                <div className="text col-12 col-md-4">شماره تماس: 09331111111</div>
                                <div className="text col-12 col-md-4">آدرس ما: مشهد، خیابان سی ام</div>
                            </div>
                            <div className="footer__social my-4">
                                <div className="row social justify-content-center">
                                    <div className="social__instagram">
                                        <img
                                            className="social__icon"
                                            src="/assets/images/icons/instagram.svg"
                                            alt="instagram"
                                        />
                                        <div className="social__text">اینستاگرام دیجی مارک</div>
                                    </div>
                                    <div className="social__telegram">
                                        <img
                                            className="social__icon"
                                            src="/assets/images/icons/telegram.svg"
                                            alt="telegram"
                                        />
                                        <div className="social__text">تلگرام دیجی مارک</div>
                                    </div>
                                    <div className="social__whatsapp">
                                        <img
                                            className="social__icon"
                                            src="/assets/images/icons/whatsapp.svg"
                                            alt="whatsapp"
                                        />
                                        <div className="social__text">واتساپ دیجی مارک</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Textfield label="دانلود" placeholder="ارسال لینک دانلود" onChange={(e) => {}} />
                            <div className="footer__download mt-2">
                                <div className="row">
                                    <div className="col-6 pl-1">
                                        <img
                                            className="download__image"
                                            src="/assets/images/icons/google-play.svg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="col-6 pr-1">
                                        <img
                                            className="download__image"
                                            src="/assets/images/icons/cafebazaar.svg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="col-6 pl-1">
                                        <img
                                            className="download__image"
                                            src="/assets/images/icons/app-store.svg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="col-6 pr-1">
                                        <img
                                            className="download__image"
                                            src="/assets/images/icons/digi-mark.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLinks />
            <TermsText />
        </>
    );
};
