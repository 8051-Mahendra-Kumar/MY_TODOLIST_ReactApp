import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/MY_TODOLIST_ReactApp">{props.tittle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/MY_TODOLIST_ReactApp">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/MY_TODOLIST_ReactApp/about">About</Link>
                        </li>
                    </ul>
                    {
                        props.searchBar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""
                    }
                </div>
            </div>
        </nav>
    )
}

Header.defaultpropTypes={
    tittle: "My Tittle Here",
    searchBar: true
}
Header.propTypes={
    tittle: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
};

export default Header
