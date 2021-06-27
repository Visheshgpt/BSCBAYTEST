import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeSectionTwo = () => {
  return (
    <section className='bg-b-1'>
      <Container fluid='xxl' className='px-0'>
        <Container className='py-5 z-10'>
          <Row>
            <Col>
              <div>
                <div className='heading-primary-2'>
                  <div className='text-light'> DECENTRALIZED</div>
                  <div>PROTOCOLS & SERVICES</div>
                </div>
                <p className='px-0 col-lg-9'>
                  <b>Started in June 2021,</b> BSCBay provides an ever-growing
                  suite of decentralized services. The objective is to create
                  wealth for investors and bring unprecedented value to the
                  De-Fi space as a whole by delivering flexible, disruptive, and
                  trusted technology.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              lg={6}
              className='order-first order-lg-last mb-3 mb-lg-0'
            >
              <div>
                <img
                  className='d-block w-100 h-100 rounded-lg-2'
                  src='./assets/bg-2.png'
                  alt='..'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default HomeSectionTwo;
