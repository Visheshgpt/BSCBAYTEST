import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from '../../components/Head';

import contractService from '../../shared/LMcontractservice'
import WalletConnectProvider from "@walletconnect/web3-provider";




const LaunchStepThree = () => {



async function logoutUser()  
{
      if (window.sessionStorage.getItem("walletName") == "walletconnect") {

      const provider = new WalletConnectProvider({

        rpc: {
          1 : "https://bsc-dataseed.binance.org/",
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545"
        },

      });

       await provider.disconnect();

     }

 localStorage.removeItem("provider");
 window.sessionStorage.removeItem("walletAddress");
 window.sessionStorage.removeItem("walletName");
 window.location.reload(); 

}



async function requestAuth() 
{
   
   try {
       console.log("Metamask auth requested");

       localStorage.setItem("loginType", "metamask");
       
       const web3 = await contractService.getWeb3Client();
      
      await userLogin(web3);

   } 
   catch (e) {
       console.error(e);
   }
 };    


 async function userLogin(web3) {
    
  const accounts = await web3.eth.getAccounts();
  const providerName = localStorage.getItem("loginType");
  let loginType = localStorage.getItem("loginType");
  
  const networkId = await web3.eth.net.getId();

  console.log('User login params => ',accounts, networkId);
  window.sessionStorage.setItem("walletAddress", accounts[0]);
  window.sessionStorage.setItem("walletName", providerName);

   window.location.assign("/wallet"); 
  
};






  return (
    <section className='flex-fill bg-color-5 text-white d-flex align-items-center justify-content-center position-relative'>
      <Head title='Choose Wallet' />
      <div className='bg-secondary rounded-lg-2 px-md-5 px-1 py-4 mx-2 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center mb-5'>
        <div className='my-4 d-flex align-items-baseline justify-content-center'>
          <img src='/assets/wallet.png' alt='...' />
        </div>
        <div className='text-primary heading-secondary-2 fw-bold mb-2'>
          Choose Wallet
        </div>
        <p className='mb-3 fw-light text-white-2'>
          Safely connect to your existing blockchain wallet and directly stake
          tokens in them
        </p>
        <Link
          onClick={requestAuth}
          className='border border-primary rounded-lg-2 p-3 d-flex align-items-center'
        >
          <img
            className='d-block'
            height={45}
            src='/assets/e-icon-0.png'
            alt='...'
          />
          <span className='ms-3 text-white-2'>Meta Mask</span>
          <img
            className='ms-auto shake-horizontal'
            src='/assets/arrow-1.png'
            alt='...'
          />
        </Link>
      </div>
    </section>
  );
};

export default LaunchStepThree;
