import React, { useEffect } from "react";
import LinkTo from "@components/LinkTo";
import { Container } from "@components/Pagination/index.style";
import { ISetValue } from "@interfaces/index";

interface IPagination extends ISetValue {
  totalPages: number;
  currentPage: number;
  nextPageDisabled: boolean;
  prevPageDisabled: boolean;
}

const Pagination = ({ totalPages, currentPage, nextPageDisabled, prevPageDisabled, setValue }: IPagination) => {
  useEffect(() => setValue((prevState) => [...prevState, "Pagination"]), []);

  const nextPageUrl = `/posts/page/${currentPage + 1}`;
  const prevPageUrl = currentPage === 2 ? "/posts" : `/posts/page/${currentPage - 1}`;

  return (
    <Container>
      {prevPageDisabled ? null : (
        <LinkTo href={prevPageUrl}>
          <span>Previous page</span>
        </LinkTo>
      )}
      <p style={{ color: "black" }}>
        Page {currentPage} of {totalPages}
      </p>
      {nextPageDisabled ? null : (
        <LinkTo href={nextPageUrl}>
          <span>Next page</span>
        </LinkTo>
      )}
    </Container>
  );
};

export default Pagination;
