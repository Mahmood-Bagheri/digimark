import React, { FunctionComponent } from "react";
import { Card } from "components/Card";
import "./blog-post.scss";

export const BlogPost: FunctionComponent<Partial<IBlogPost>> = props => {
    const { title, shortDesc, date, linkText, imageUrl } = props;

    return (
        <Card link={linkText} className="pb-3 pb-sm-3 pb-lg-3">
            <div className="blog-post">
                <div className="blog-post__image-time">
                    <img className="blog-post__image" src={imageUrl as string} alt={title as string} />
                    <div className="blog-post__time">
                        {renderIcon()}
                        {renderDate()}
                    </div>
                </div>
                <div className="blog-post__content">
                    {renderTitle()}
                    <div className="blog-post__description">{renderShortDescription()}</div>
                </div>
            </div>
        </Card>
    );

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
        return <div className="blog-post__title">{title}</div>;
    }

    function renderShortDescription(): JSX.Element {
        return <>{shortDesc}</>;
    }
};
