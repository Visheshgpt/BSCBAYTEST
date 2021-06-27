import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  const socialMediaArr = [
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
  ];

  return (
    <footer className='bg-color-2 text-white py-5'>
      <Container fluid='xxl' className='px-0 position-relative'>
        <img className='position-absolute' src='./assets/bg-7.png' alt='..' />
        <Container className='text-center z-10'>
          {/* === */}
          <div className='mb-3'>
            <Link to='/'>
              <img src='./assets/logo.png' alt='Logo' />
            </Link>
          </div>
          {/* === */}
          <div className='mb-3'>
            <ul className='nav justify-content-center'>
              <li className='nav-item mx-md-3'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item mx-md-3'>
                <Link className='nav-link' to='/'>
                  Services
                </Link>
              </li>
              <li className='nav-item mx-md-3'>
                <Link className='nav-link' to='/'>
                  Investment
                </Link>
              </li>
              <li className='nav-item mx-md-3'>
                <Link className='nav-link' to='/'>
                  About us
                </Link>
              </li>
              <li className='nav-item mx-md-3'>
                <Link className='nav-link' to='/'>
                  Launch app
                </Link>
              </li>
            </ul>
          </div>
          {/* === */}
          <p>
            123-456-7890, Info@mysite.com, 500 Terry Francois St, San Francisco,
            CA 94158
          </p>
          {/* === */}
          <Row className='justify-content-center mb-3' style={{ gap: 0 }}>
            {socialMediaArr.map((data, i) => (
              <a
                style={{ width: 30 }}
                key={i}
                href={data.link}
                target='_blank'
                rel='noreferrer'
                className='mx-2'
              >
                <img
                  className='d-block icon-hover'
                  height={25}
                  src={`./assets/icons/sm-icon-${i}.png`}
                  alt='..'
                />
              </a>
            ))}
          </Row>
          {/* === */}
          <div
            className='d-flex flex-column flex-md-row justify-content-center mb-3'
            style={{ gap: 18 }}
          >
            <div>
              <Link className='btn py-2 btn-outline-primary'>Contact us</Link>
            </div>

            <div>
              <Link className='btn py-2 btn-outline-primary'>
                Subscribe for newsletter
              </Link>
            </div>
          </div>
          {/* === */}
          <p>
            <div className='fw-bold'>Copyright @ bscbay.com</div>
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. BSC-Bay accepts no liability for any loss occurring to
            any person acting or refraining from action as a result of any
            material provided or published. BSC-Bay was built as an experiment
            in decentralization.
          </p>
        </Container>
      </Container>
    </footer>
  );
};

export default FooterPage;
