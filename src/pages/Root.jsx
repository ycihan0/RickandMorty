import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";



const RootLayout = ({showCartHandler}) => {
 
  return (
    <Fragment> 
      <Header showCartHandler={showCartHandler}/>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
