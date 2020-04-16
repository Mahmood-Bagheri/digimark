import React, { FunctionComponent } from "react";
import { Card } from "components/Card";
import "./blog-post.scss";

export const BlogPost: FunctionComponent<Partial<IBlogPost>> = (props) => {
    const { title, shortDesc, date, linkText } = props;

    return (
        <Card link={linkText} className="pb-3 pb-sm-3 pb-lg-3">
            <div className="post">
                <div className="post__image-time">
                    {renderImage()}
                    <div className="post__time">
                        {renderIcon()}
                        {renderDate()}
                    </div>
                </div>
                <div className="post__content">
                    {renderTitle()}
                    <div className="post__description">{renderShortDescription()}</div>
                </div>
            </div>
        </Card>
    );

    function renderImage(): JSX.Element {
        return <img className="post__image" src="assets/images/image.png" alt={title as string} />;
    }

    function renderIcon(): JSX.Element {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-clock"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        );
    }

    function renderDate(): JSX.Element {
        return <span>{JSON.stringify(date?.getFullYear())}</span>;
    }

    function renderTitle(): JSX.Element {
        return <div className="post__title">{title}</div>;
    }

    function renderShortDescription(): JSX.Element {
        return <>{shortDesc}</>;
    }
};
