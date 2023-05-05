import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const  modeFunction = ()=>{
    //  if(props.mode == 'dark'){
    //         document.nav
    //     }

    // const  handlecolorPicker = (event)=>{
    //     setcolorTheme(event.target.value);
    // }
    // }
    return (
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'} shadow p-1 mb-5`}
            style={{ backgroundImage: props.mode === 'dark' ? "linear-gradient(to top left, #1f2937, #1f2937)" : "linear-gradient(to top left, #c28888, #ebc2c2)" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/About">About</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" id="sTxt" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" id="sBtn" type="submit">Search</button>
                </form>  */}
                    {/* <input type="color" className="form-control form-control-color p-0 me-2" onChange={handlecolorPicker} style={{width: "25px", height:"25px"}}  value = {colorTheme} id="exampleColorInput" title="Choose your color"/> */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Dark mode</label>
                        </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "TextUtils"
}