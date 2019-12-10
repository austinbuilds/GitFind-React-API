import React, { useState } from 'react';
import Search from './api/Search';
import Popular from './api/Popular';
import Rate from './api/Rate';

const Content = () => {
  const [toggle, setToggle] = useState(false);

  const change = v => {
    setToggle(v);
  };

  return (
    <div className='content'>
      <div className='container py-md-5'>
        <div className='row'>
          <div className='col-12' data-aos='fade-up'>
            <div className='btn-group btn-group-toggle' data-toggle='buttons'>
              <label className='btn btn-lg btn-accent active'>
                <input
                  type='radio'
                  name='options'
                  id='option1'
                  checked
                  readOnly
                  onClick={() => change(false)}
                />{' '}
                Popular
              </label>
              <label className='btn btn-lg btn-accent'>
                <input
                  type='radio'
                  name='options'
                  id='option2'
                  onClick={() => change(true)}
                />{' '}
                Search
              </label>
            </div>
          </div>
        </div>
        <div
          className='row justify-content-center mt-4'
          data-aos='fade-up'
          data-aos-delay='50'>
          <Rate />
        </div>
        <div
          className='row mt-5 justify-content-center'
          data-aos='fade-up'
          data-aos-delay='100'>
          <div className='col-12'>{toggle ? <Search /> : <Popular />}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
