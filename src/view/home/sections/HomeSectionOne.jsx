import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Image1 } from '../../../assets/main-image-1.svg';
import { ReactComponent as Ellipse1 } from '../../../assets/Ellipse-1.svg';
import { ReactComponent as Ellipse2 } from '../../../assets/Ellipse-2.svg';
import { ReactComponent as Arrow } from '../../../assets/next.svg';
const HomeSectionOne = () => {
  const boxArr = [
    { name: 'Investors', number: '8210' },
    { name: 'Market Cap', number: '503.400 ' },
    { name: 'Reward Pool', number: '$13,231' },
    { name: 'Distributed', number: '$1,291,627' },
    { name: 'Per Million BCBS', number: '$1.02' },
  ];

  const socialMediaArr = [
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
    { link: 'https://google.com' },
  ];

  return (
    <section className='bg-color-2 text-white'>
      <Container fluid='xxl' className='position-relative pt-5'>
        <Row className='justify-content-between'>
          <Col md={12} lg={6} className='mb-5 mb-xl-0'>
            <div>
              <div className='heading-primary mb-2'>
                The <span className='text-primary'>BSC</span> Ecosystem
              </div>
              <div className='text-white-2 fw-light heading-secondary-3 px-0 col-md-7 col-lg-11 col-xl-8 mb-4'>
                Investing | Decentralized Launch Pad Token Minting | Lockers |
                Analytics
              </div>
              <div className='d-flex flex-column flex-md-row mx-0'>
                <div className='pe-md-2'>
                  <Link className='btn-1 button-1 btn-warning w-100'>
                    <img height={61} src='./assets/rocket.png' alt='rocket' />
                    <span className='text-uppercase fw-bold'> Launch App</span>
                    <i className='ms-3' style={{ height: 30, width: 18 }}>
                      <Arrow />
                    </i>
                  </Link>
                </div>
                <div className='ps-md-2 mt-3 mt-md-0'>
                  <Link
                    style={{ height: 60 }}
                    className='btn btn-outline-warning px-4 w-100'
                  >
                    <span className='text-uppercase'>Buy Now</span>
                    <i className='ms-3' style={{ height: 30, width: 18 }}>
                      <Arrow />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={5} className='order-first order-lg-last'>
            <div className='z-10' style={{ height: '100%' }}>
              <Image1 />
            </div>
          </Col>
        </Row>
        <div className='px-0 col-lg-8 mx-auto'>
          <Row className='justify-content-center z-10 pb-5' style={{ gap: 15 }}>
            {boxArr.map((data, i) => (
              <div key={i} className='box-1 bg-color-2 text-small'>
                <img
                  className='d-block mb-1'
                  height={24}
                  src={`./assets/icons/box-icon-${i}.png`}
                  alt={data.name}
                />
                <span className='text-capitalize text-white-2'>
                  {data.name}
                </span>
                <span className='text-white'>{data.number}</span>
              </div>
            ))}
          </Row>
          <Row className='justify-content-center z-10 pb-5' style={{ gap: 10 }}>
            {socialMediaArr.map((data, i) => (
              <a
                style={{ width: 30 }}
                key={i}
                href={data.link}
                target='_blank'
                rel='noreferrer'
                className='mx-1 mx-sm-3'
              >
                <img
                  className='d-block icon-hover'
                  height={25}
                  src={`./assets/icons/b-icon-${i}.svg`}
                  alt='..'
                />
              </a>
            ))}
          </Row>
        </div>
        {/* Start */}
        <div
          className='position-absolute end-0 bottom-0 d-none d-xl-block'
          style={{ width: '30%' }}
        >
          <Ellipse1 />
        </div>
        <div className='position-absolute end-0 bottom-0 d-none d-xl-block'>
          <Ellipse2 />
        </div>
        {/* End */}
      </Container>
    </section>
  );
};

export default HomeSectionOne;
