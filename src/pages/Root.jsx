import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const RootLayout = ({
  showCartHandler,
  setSearch,
  setPageNumber,
  filters,
  setFilters,
}) => {
  return (
    <Fragment>
      <Header
        showCartHandler={showCartHandler}
        setSearch={setSearch}
        setPageNumber={setPageNumber}
        filters={filters}
        setFilters={setFilters}
      />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
