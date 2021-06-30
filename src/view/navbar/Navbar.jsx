import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname === '/reports' || location.pathname === '/wallet';

  if (hideHeader) {
    return null;
  }

  return (
    <>
      <section className='position-sticky fixed-top bg-color-5 py-3'>
        <Container fluid='xxl' className='position-relative'>
          <div className='bg-testing-1' />
          <div className='d-flex align-items-center z-10'>
            <div>
              <Link to='/'>
                <img className='logo-img' src='./assets/logo.png' alt='Logo' />
              </Link>
            </div>
            <div className='ms-auto d-none d-md-flex align-items-center'>
              <ul className='nav'>
                <li className='nav-item pe-lg-4'>
                  <NavLink className='nav-link' to='/services'>
                    Services
                  </NavLink>
                </li>
                <li className='nav-item pe-lg-4'>
                  <NavLink className='nav-link' to='/investment'>
                    Investment
                  </NavLink>
                </li>
                <li className='nav-item pe-lg-4'>
                  <NavLink className='nav-link' to='/about'>
                    About us
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <Link className='btn btn-outline-primary text-white'>
                    Launch app
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile button */}
            <div className='ms-auto d-flex d-md-none align-items-center'>
              <Link className='btn btn-sm btn-outline-primary text-white'>
                <small>
                  <small>Launch app</small>
                </small>
              </Link>
            </div>
            {/* Mobile button */}
          </div>
        </Container>
      </section>
      {/* Mobile Navbar */}
      <section className='bg-secondary py-2 fixed-bottom d-block d-md-none'>
        <div>
          <ul className='nav justify-content-around'>
            <li className='nav-item pe-lg-4'>
              <NavLink className='nav-link' to='/services'>
                <small>Services</small>
              </NavLink>
            </li>
            <li className='nav-item pe-lg-4'>
              <NavLink className='nav-link' to='/investment'>
                <small> Investment</small>
              </NavLink>
            </li>
            <li className='nav-item pe-lg-4'>
              <NavLink className='nav-link' to='/about'>
                <small> About us</small>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      {/* Mobile Navbar */}
    </>
  );
};
