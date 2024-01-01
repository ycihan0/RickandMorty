import ReactPaginate from "react-paginate"
import "./Pagination.css"

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            forcePage={pageNumber===1? 0:pageNumber-1}
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            // pageRangeDisplayed={5}
            pageCount={info.pages}
            previousLabel="Prev"
            containerClassName="pagination-container"
            pageClassName="pagination-page"
            breakClassName="pagination-break"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
            activeClassName="pagination-active"

        />
    )
}

export default Pagination
