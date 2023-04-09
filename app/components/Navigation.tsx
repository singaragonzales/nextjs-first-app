import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="/">Next First App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </React.Fragment>  
  )
}

export default Navigation