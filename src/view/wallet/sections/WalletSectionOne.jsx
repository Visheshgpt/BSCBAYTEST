import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const WalletSectionOne = () => {
  const boxArr = [
    {
      title: 'BNB',
      subTitle: '12.87374',
      valueText: '$18980 USD',
      text: ' 5% Fee on Reward Extraction',
    },
    {
      title: 'BNB',
      subTitle: '12.87374',
      valueText: '102mn BSCB',
      text: 'No Tax on Reinvestment',
    },

    {
      title: 'Rewards Earned',
      subTitle: 'BNB 12.312 ',
      valueText: 'USD $16021',
    },

    {
      title: 'Transaction Limit',
      subTitle: '100,000,000,00',
      valueText: 'BNB 1.3943',
    },

    {
      title: 'Liquidity Pool',
      subTitle: '$1,910,7373',
      valueText: 'BNB 1.3943',
    },

    {
      title: 'BNB Liquidity Pool',
      subTitle: 'BNB 3,12323',
      valueText: 'BUSD 937,389.87',
    },
  ];

  const totalArr = [
    {
      key: 0,
      title: 'BNB Earned',
      subTitle: '15.3256',
      text: 'Till Date By the User',
    },
    {
      key: 1,
      title: 'BSCB Earned',
      subTitle: '205.56',
      text: 'User Reinvestment',
    },

    {
      key: 0,
      title: 'BSCB Earned',
      subTitle: '3568 23',
      text: 'Till Date By the User',
    },

    {
      key: 1,
      title: 'BSCB Earned',
      subTitle: '32659',
      text: 'Overall Reinvestment',
    },
  ];

  const poolArr = [{}, {}, {}, {}];

  return (
    <div>
      {/* Header Start */}
      <header className='mb-4'>
        <div className='d-flex flex-wrap'>
          <div className='me-auto'>
            <div className='text-primary title-small fw-normal'>
              Esther Howard
            </div>
            <div className='text-small'>Chicago, Us</div>
          </div>
          {/* === */}
          <div className='text-sm-end'>
            <div className='text-small text-white-2'>
              Today BCBS <b>$1.02</b>/Million{' '}
            </div>
            <div className='text-small'>
              Claim Date: Monday. 15th June, 2021{' '}
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
      {/* Main Start */}
      <section className='d-flex flex-wrap'>
        <div className='col'>
          <div className='d-flex flex-wrap'>
            <div className='col-12 col-md-6 p-1'>
              <div className='d-flex bg-secondary p-3 justify-content-between rounded-lg-2'>
                <div>
                  <img src='./assets/w-icon-big-0.png' alt='..' />
                </div>
                <div>
                  <div className='title-small-1 text-white-2 fw-normal'>
                    Your Rewards
                  </div>
                  <div className='heading-secondary-2 mb-1 fw-500'>
                    <span className='text-primary opacity-8'>BNB</span> 2.00
                  </div>
                  <div>
                    <button type='button' className='px-3 py-2 btn btn-color'>
                      <span className='text-uppercase title-small-1'>
                        Claim reward
                      </span>
                    </button>
                  </div>
                  <div className='text-white-2 text-small-1 mt-2'>
                    5% Fee on Reward Extraction
                  </div>
                </div>
                <div>
                  <Link>
                    <img className='d-block' src='./assets/dots.png' alt='..' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 p-1'>
              <div className='d-flex bg-secondary p-3 justify-content-between rounded-lg-2'>
                <div>
                  <img src='./assets/w-icon-big-1.png' alt='..' />
                </div>
                <div>
                  <div className='title-small-1 text-white-2 fw-normal'>
                    Re-Invest and Get
                  </div>
                  <div className='heading-secondary-2 mb-1 fw-500'>
                    5217Mn Tokens
                  </div>
                  <div>
                    <button type='button' className='px-3 py-2 btn-info col-10'>
                      <span className='text-uppercase title-small-1'>
                        RE-invest
                      </span>
                    </button>
                  </div>
                  <div className='text-white-2 text-small-1 mt-2'>
                    No Tax on Reinvestment
                  </div>
                </div>
                <div>
                  <Link>
                    <img className='d-block' src='./assets/dots.png' alt='..' />
                  </Link>
                </div>
              </div>
            </div>
            {boxArr.map((data, i) => (
              <div key={i} className='col-12 col-md-4 p-1'>
                <button
                  type='button'
                  className='btn w-100 text-start box-hover h-100 d-flex bg-secondary p-3 justify-content-between rounded-lg-2 icon-hover-1'
                >
                  <div>
                    <img
                      className='d-block mb-1'
                      src={`./assets/w-icon-${i}.png`}
                      alt='..'
                    />
                    <div className='mb-0 title-small fw-500'>
                      {' '}
                      <div className='text-primary opacity-8 mb-1'>
                        {data.title}
                      </div>{' '}
                      <div className='mb-1 text-white-2'>{data.subTitle}</div>{' '}
                      <div className='mb-1 text-white-3'>{data.valueText}</div>
                    </div>
                    <div className='text-white-2 text-small-1'>{data.text}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* ==== */}
        <div className='px-2 col-xxl-2 col-xl-3 col-12 my-4 my-xl-0 d-flex flex-column'>
          <div className='title-small text-primary opacity-8 fw-500 mb-2'>
            Total Earning
          </div>
          {totalArr.map((data) => (
            <div
              key={data.key}
              className='flex-fill border rounded-lg-2 p-2 border-secondary mb-2 icon-hover-4'
            >
              <img
                height={17}
                className='d-block mb-1'
                src={`./assets/w-t-${data.key}.png`}
                alt='..'
              />
              <div className='mb-0 text-small fw-500'>
                {' '}
                <div className='text-primary opacity-8 '>{data.title}</div>{' '}
                <div className=' text-white-3'>{data.subTitle}</div>
              </div>
              <div className='text-white-2 text-small-1'>{data.text}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Main End */}
      {/* Table Start */}
      <section className='mt-3 mx-md-2'>
        <header className='d-flex mb-3'>
          <div className='me-auto'>
            <div className='d-flex align-items-center'>
              <img
                height={17}
                className='d-block me-2'
                src={`./assets/w-t-1.png`}
                alt='..'
              />
              <span className='title-small text-primary opacity-8'>
                BSCB Pool
              </span>
            </div>
          </div>
          <div>
            <Link className='text-light'>
              <span className='text-small fw-normal'>View All</span>
            </Link>
          </div>
        </header>
        {/* === */}
        {poolArr.map((data, i) => (
          <div>
            <div className='border-bottom border-light pt-2 pb-3'>
              <header>
                <ul className='nav overflow-auto flex-nowrap align-items-center justify-content-between text-small-1'>
                  <li className='col-5 col-md-auto'>
                    <div className='text-primary opacity-8 title-small-1'>
                      Earn Rabbit
                    </div>
                    <div className='text-light'>Stake Cake</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Rabbit Earned</div>{' '}
                    <div>12.10</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'> APR</div> <div>454.477%</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Total Staked</div>{' '}
                    <div>262,017 Cake</div>
                  </li>
                  <li className='col-5 col-md-auto'>
                    <div className='text-light'>Ends in</div>{' '}
                    <div>1,724,612 blocks</div>
                  </li>
                  <li className='col-5 col-md-auto dropdown-container'>
                    <Dropdown>
                      <Dropdown.Toggle className='p-0 text-light' variant='..'>
                        <span className='text-small fw-normal'>Details</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='position-fixed bg-dark bg-gradient'>
                        <Dropdown.Item>Reinvest</Dropdown.Item>
                        <Dropdown.Item>Claim Rewards</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </header>
            </div>
          </div>
        ))}
      </section>
      {/* Table End */}
    </div>
  );
};

export default WalletSectionOne;
