import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Offcanvas.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const OffcanvasOverlay = (props) => {
  return (
    < div className="offcanvas">
      {props.children}
    </div>
  );
};


const Offcanvas = (props) => {
  const portalElement=document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.hideCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Offcanvas
