import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [country, setCountry] = useState("us")

  const changeCountry = (cd) => {
    if (cd == 1) {
      console.log("I am india")
      setCountry("in")
    } else {
      console.log("I am us")
      setCountry("us")
    }
  }
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Monkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={`${country}/`}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/business`}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/entertainment`}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/health`}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/science`}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/sports`}>sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${country}/technology`}>Technology</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"

                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>

                      <button className="dropdown-item" onClick={() => changeCountry(1)}>
                        <Link to={`${country == "in" ? "in" : "in"}/`}>
                          India
                        </Link>
                      </button>
                    </li>
                    <li>

                      <button className="dropdown-item" onClick={() => changeCountry(2)}>
                        <Link to={`${country =="us"?"us":"us"}/`}>
                          United State
                        </Link>
                      </button>

                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar;
