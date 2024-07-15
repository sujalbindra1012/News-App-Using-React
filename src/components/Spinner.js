import React, { Component } from 'react';
import loading from './Spinner-3.gif'

const Spinner = ()=> {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt='not generated'/>
      </div>
    )
  }

export default Spinner;
