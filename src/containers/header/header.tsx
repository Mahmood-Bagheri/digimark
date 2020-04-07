import React from "react";
import { Textfield } from "components/Textfield";
import { Navbar } from "containers/navigation-bar";
import { Seprator } from "components/Seprator";
import "./header.scss";

export const Header = (props: {}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo col-6 col-md-3 d-flex align-items-center ">
                        <img src="assets/icons/icon-en.svg" alt="logo" />
                    </div>
                    <div className="search-bar col-12 col-md-6">
                        <Textfield
                            label="جستجو"
                            placeholder="نام کالا، برند و یا دسته بندی مورد نظر خود را جست و جو کنید"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <div className="icons col-6 col-md-3">
                        <div className="navbar-icon">
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21.632"
                                    height="17.942"
                                    viewBox="0 0 21.632 17.942"
                                >
                                    <g id="Group_3" data-name="Group 3" transform="translate(-1075.443 -616.333)">
                                        <path
                                            id="Path_43"
                                            data-name="Path 43"
                                            d="M1106.172,633.132c0-.008-.008-.015-.012-.023a.557.557,0,0,1-.042-.079c0-.011-.007-.022-.011-.034a.561.561,0,0,1-.023-.31.655.655,0,0,1,.023-.077c0-.011.006-.022.011-.033a.553.553,0,0,1,.042-.08c0-.007.007-.015.012-.022a.569.569,0,0,1,.074-.089l3.5-3.5a.591.591,0,0,1,.836.836l-2.489,2.489h9.943a.591.591,0,0,1,0,1.183h-9.943l2.489,2.489a.592.592,0,0,1-.836.837l-3.5-3.5A.581.581,0,0,1,1106.172,633.132Z"
                                            transform="translate(-21.551 -7.498)"
                                            fill="#7b7da3"
                                        />
                                        <path
                                            id="Path_44"
                                            data-name="Path 44"
                                            d="M1093.152,627.651a.584.584,0,0,0-.63.55,5.6,5.6,0,0,1-.909,3.3,4.565,4.565,0,0,1-2.649,1.144,24.765,24.765,0,0,1-4.473.449,31.556,31.556,0,0,1-4.413-.425,3.111,3.111,0,0,1-2.6-1.655,8.949,8.949,0,0,1-.777-3.448c-.04-.579-.056-1.174-.068-1.686-.031-1.353.047-2.675.127-3.79a5.868,5.868,0,0,1,.664-2.733,2.737,2.737,0,0,1,1.211-.971,6.954,6.954,0,0,1,1.517-.438,23.091,23.091,0,0,1,7.391-.24l.261.032a7.251,7.251,0,0,1,3.347.964,3.916,3.916,0,0,1,1.335,2.841.591.591,0,1,0,1.173-.154,5,5,0,0,0-1.835-3.66,8.265,8.265,0,0,0-3.877-1.165l-.255-.031a24.257,24.257,0,0,0-7.761.25,8.062,8.062,0,0,0-1.778.521,3.936,3.936,0,0,0-1.713,1.4,6.824,6.824,0,0,0-.859,3.3c-.082,1.143-.161,2.5-.129,3.9.012.525.028,1.136.07,1.74a10.007,10.007,0,0,0,.91,3.918,4.338,4.338,0,0,0,3.476,2.275,32.63,32.63,0,0,0,4.579.437h.1a25.464,25.464,0,0,0,4.587-.469,5.588,5.588,0,0,0,3.314-1.512,6.483,6.483,0,0,0,1.214-4.013A.592.592,0,0,0,1093.152,627.651Z"
                                            transform="translate(0 0)"
                                            fill="#7b7da3"
                                        />
                                    </g>
                                </svg>
                                <span>ورود / ثبت نام</span>
                            </div>
                            <div className="icon icon--bagde" data-badge="2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20.796"
                                    height="21.589"
                                    viewBox="0 0 20.796 21.589"
                                >
                                    <path
                                        id="Path_9"
                                        data-name="Path 9"
                                        d="M1104.557,496.748a2.5,2.5,0,0,0-1.979-.961h-2.431v-.463a5.469,5.469,0,0,0-1.713-3.967,5.4,5.4,0,0,0-4.069-1.471,5.553,5.553,0,0,0-5.112,5.626v.275h-2.431a2.516,2.516,0,0,0-2.45,3.094l1.816,9.41.022.085a4.559,4.559,0,0,0,4.316,3.088h8.416a4.554,4.554,0,0,0,4.326-3.118l1.756-9.45A2.5,2.5,0,0,0,1104.557,496.748Zm-14.033-1.236a4.281,4.281,0,0,1,3.917-4.357,4.177,4.177,0,0,1,4.435,4.169v.463h-8.353Zm13.259,3.119-1.732,9.353a3.284,3.284,0,0,1-3.107,2.209h-8.416a3.288,3.288,0,0,1-3.1-2.188l-1.815-9.4a1.248,1.248,0,0,1,1.21-1.549h2.431v.928a.635.635,0,1,0,1.271,0v-.928h8.353v.928a.635.635,0,1,0,1.271,0v-.928h2.431a1.239,1.239,0,0,1,.98.476A1.262,1.262,0,0,1,1103.783,498.631Z"
                                        transform="translate(-1084.302 -489.876)"
                                        fill="#7b7da3"
                                    />
                                </svg>

                                <span>سبد خرید</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Seprator />
            <Navbar />
        </div>
    );
};
