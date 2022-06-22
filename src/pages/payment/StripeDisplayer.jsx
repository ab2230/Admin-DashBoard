import React from 'react';
import './stripeDisplayer.scss';
import StripePage from './StripePage'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';


const stripePromise = loadStripe(
    "pk_test_51KZt0mGYU4xyMzE4UnV4OM9X55xOHoO2itS45TASf1tNLIP1ekIfrtI14qZeH1WhbTBzyBoaRbFXv7cG6MAbbYS700AfNzh8ya"
  );
const StripeDisplayer = () => {
  return (
    <div className='displayer'>
       <Sidebar />
      <div className="displayerContainer">
          <Navbar />
          <div className='thePage'>
            <Elements stripe={stripePromise}>
            <StripePage />
            </Elements>
          </div>
      </div>
    </div>
  )
}

export default StripeDisplayer
