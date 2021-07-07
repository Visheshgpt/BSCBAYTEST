import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from '../../components/Head';

const LaunchStepOne = () => {
  return (
    <section className='flex-fill bg-color-5 text-white d-flex align-items-center justify-content-center position-relative'>
      <Head title='Not Connected' />
      <Link
        to='/wallet/step-two'
        className='bg-secondary rounded-lg-2 px-md-5 px-1 py-3 mx-2 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center icon-hover-1'
      >
        <div className='mb-3 d-flex align-items-baseline justify-content-center'>
          <img src='/assets/e-icon-0.png' alt='...' />
          <img className='ms-1' src='/assets/e-icon-1.png' alt='...' />
        </div>
        <p className='mb-0 fw-light text-white'>
          You are not connected or not using Binance Smart Chain network
          <br />
          To use the app, make sure: <br />
          You are using the Binance Smart Chain network You need to connect
          wallet to continue
          <br />
          Please switch to BSC Network if you use:
          <br />
          <span className='text-primary'>Metamask</span>
          <br />
          <span className='text-primary fw-bold'>TrustWallet</span>
        </p>
      </Link>
    </section>
  );
};

export default LaunchStepOne;
