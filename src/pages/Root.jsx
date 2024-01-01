import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";



const RootLayout = ({showCartHandler, setSearch,setPageNumber}) => {
 
  return (
    <Fragment> 
      <Header showCartHandler={showCartHandler} setSearch={setSearch} setPageNumber={setPageNumber}/>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
