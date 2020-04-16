import React, { FunctionComponent, useState, useCallback, useEffect } from "react";
import { IPagination } from "./Pagination.types";
import classnames from "classnames";
import "./Pagination.scss";

export const Pagination: FunctionComponent<IPagination> = (props) => {
    const { count, perPage, getCurrent, className, ...restProps } = props;
    const totalPages = Math.floor(count / perPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    console.log("render from pagination");

    useEffect(() => {
        getCurrent(currentPage);
    }, [currentPage, getCurrent]);

    const nexPage = () => setCurrentPage(currentPage + 1);

    const prevPage = () => setCurrentPage(currentPage - 1);

    const setCurrent = (e: number) => setCurrentPage(e);

    const isPrevButtonDisabled = currentPage === 1;
    const isNexButtonDisabled = totalPages <= currentPage;

    const onPageButtonClick = useCallback((e: number) => setCurrent(e), []);

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={classnames("pagination", className)} {...restProps}>
            <button className="pagination__prev" disabled={isPrevButtonDisabled} onClick={prevPage}>
                قبلی
            </button>
            {renderButtons()}
            <button className="pagination__next" disabled={isNexButtonDisabled} onClick={nexPage}>
                بعدی
            </button>
        </div>
    );

    function renderButtons(): JSX.Element | JSX.Element[] | null {
        return new Array(totalPages).fill("").map((item, index) => (
            <div
                key={index}
                className={classnames("pagination__item", {
                    "pagination__item--active": currentPage === index + 1,
                })}
                onClick={() => onPageButtonClick(index + 1)}
            >
                {index + 1}
            </div>
        ));
    }
};
