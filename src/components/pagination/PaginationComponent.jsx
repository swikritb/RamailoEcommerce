/* eslint-disable react/prop-types */

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`pagination-item ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default PaginationComponent;
