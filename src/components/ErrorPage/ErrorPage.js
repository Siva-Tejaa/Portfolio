import React from "react";
import "./ErrorPage.css";

import {NavLink} from "react-router-dom";

const ErrorPage = () => {

  return(
    <div>
      <div className="error-page">
        <h1 className="error-404">404</h1>
        <h3 className="oops">Oops! Nothing Was Found</h3>
        <h6 className="error-info">The page you are looking for might have been removed had its name changed or its temporarily unavailable.</h6>
        <NavLink to="/" className="error-home-page" title="Return to Home Page">Go to Home Page</NavLink>
      </div>
    </div>
  )
}
export default ErrorPage;