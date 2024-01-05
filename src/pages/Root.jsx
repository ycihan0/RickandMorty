import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

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
      <Footer/>
    </Fragment>
  );
};

export default RootLayout;
