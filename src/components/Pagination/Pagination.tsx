import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { DOTS, usePagination } from "./usePagination";
import { getPageLength } from "../../api";
import { useParams } from "react-router-dom";
import './Pagination.scss'

export const Pagination: React.FC = () => {
  const [pagesLength, setPageLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { page } = useParams();
  const pagination = usePagination(pagesLength, currentPage, 3);

  useEffect(() => {
    getPageLength().then(pages => setPageLength(pages))
  },[]);

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [page])

  if(!pagination) {
    return null;
  }

  return (
    <div className="pagination">
      <a
        href={`page=${currentPage - 1}`}
        className={classNames("pagination__control-button", {disabled: currentPage === 1})}>
        <svg className="pagination__control-button-icon" focusable="false"
             aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
      </a>
      {pagination.map((page) => {
        if (page === DOTS) {
          return (
            <div className="pagination__dots">{DOTS}</div>
          )
        }
        return (
          <a href={`page=${page}`} className={classNames('pagination__page', {'current': currentPage === page})} >
            {page}
          </a>
        )
      })}
      <a
        href={`page=${currentPage + 1}`}
        className={classNames("pagination__control-button", {disabled: currentPage === pagesLength})}>
        <svg className="pagination__control-button-icon" focusable="false"
             aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </a>
    </div>
  )
}
