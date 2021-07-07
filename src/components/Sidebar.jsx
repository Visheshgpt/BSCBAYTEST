import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

// icons
import { ReactComponent as BNBIcon } from '../assets/BNBIcon.svg';
import { ReactComponent as Menu } from '../assets/sidebar-icons/menu.svg';
import { ReactComponent as Icon0 } from '../assets/sidebar-icons/icon-0.svg';
import { ReactComponent as Icon1 } from '../assets/sidebar-icons/icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/sidebar-icons/icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/sidebar-icons/icon-3.svg';
import { ReactComponent as Icon4 } from '../assets/sidebar-icons/icon-4.svg';
import { ReactComponent as Icon5 } from '../assets/sidebar-icons/icon-5.svg';

export const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  const linksArr = [
    { link: '/', icon: <Icon0 />, name: 'Homepage' },
    { icon: <Icon1 />, name: 'Wallet', className: 'active' },
    { icon: <Icon2 />, name: 'Documentation' },
    { icon: <Icon3 />, name: 'Contract' },
    { icon: <Icon4 />, name: 'Reports & Charts' },
    { icon: <Icon5 />, name: 'Disclaimeer' },
  ];

  const socialMediaArr = [
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
  ];

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        type='button'
        className='sidebar-btn rounded-circle btn  btn-color'
      >
        <Menu />
      </button>
      <section
        className={`sidebar-width  ${show ? 'sidebar-show' : 'sidebar-hide'}`}
      >
        {/* Logo */}
        <div className='mb-4'>
          <Link to='/'>
            <img height={45} src='./assets/logo.png' alt='Logo' />
          </Link>
        </div>
        {/* Sidebar */}
        <div className='sidebar-container text-white p-4 text-truncate'>
          <div>
            <ul className='nav flex-column'>
              {linksArr.map((data) => (
                <li className='nav-item pb-3'>
                  <Link
                    exact
                    className={`nav-link ${data.className}`}
                    to={data.link}
                  >
                    <div className='d-flex'>
                      <span className='me-2'>{data.icon}</span>
                      <span>{data.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className='nav flex-column px-3'>
              <li className='nav-item py-3'>
                <div>
                  <div className='text-primary heading-secondary-3'>
                    Your Balance
                  </div>
                  <div className='title-small fw-normal'>
                    BSCB 200.00 ($2628.00)
                  </div>
                </div>
              </li>
              <li className='nav-item py-3'>
                <p className='mb-0 '>
                  <div className='text-light'>Your Address</div>
                  <div className='text-truncate'>0xc333C1B9CA474B0588B5...</div>
                </p>
              </li>
              <li className='nav-item py-3 w-100 align-self-baseline'>
                <Link className='btn py-2 btn-outline-primary'>
                  <i className='me-2' style={{ height: 30, width: 20 }}>
                    <BNBIcon />
                  </i>
                  <div className='text-uppercase title-small-1'>Buy bcsb</div>
                </Link>
                <div className='text-white-2 text-small-1 mt-2'>
                  5% Fee on Reward Extraction
                </div>
              </li>
            </ul>
            <div className='mt-5 px-3'>
              <Link>
                <img src='./assets/logout.png' alt='logout' />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <Row
          className='justify-content-lg-center z-10 pt-4 mx-0'
          style={{ opacity: 0.7 }}
        >
          {socialMediaArr.map((data, i) => (
            <a
              key={i}
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='mx-2 d-flex justify-content-center icon-hover-3 '
            >
              <img
                className='d-block'
                height={18}
                width={18}
                src={`./assets/icons/b-icon-${i}.svg`}
                alt='..'
              />
            </a>
          ))}
        </Row>
      </section>
    </>
  );
};
