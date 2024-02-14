import React from 'react'
import { Link } from 'react-router-dom/dist'
// import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" tLink="/">UdaySingh</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/skillsAndProjects">Skills and Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/achievements">Achievements</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">My Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Me</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>

    )
}
