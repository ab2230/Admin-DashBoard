import React from 'react'
import './payment.scss';
import Sidebar from '../../componets/sidebar/Sidebar';
import Navbar from '../../componets/navbar/Navbar';
import {Link} from 'react-router-dom'


const Payment = () => {

  return (
    <div className='payment'>
       <Sidebar />
      <div className="paymentContainer">
          <Navbar />
            <div className='images'>
                    <div className='left'> 
                      <Link to='/admin/stripePay'> 
                      <img src={'http://192.168.85.229:8000/images/'+'stripe.png'}/>
                      </Link>  
                    </div>
                    <div onClick={() => window.open( 'http://localhost:8000/yenepay')} className='right'>
                    <img src={'http://192.168.85.229:8000/images/'+'ynePay.png'}/>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default Payment

