import React, { Component } from 'react';
import CustomerHandler from '../CustomerHandle/CustomerHandler'
class CustomerAdd extends Component {
  state = {}
  render() {
    return (
      <div className='customer-add'>
        <CustomerHandler></CustomerHandler>
      </div>
    );
  }
}

export default CustomerAdd;