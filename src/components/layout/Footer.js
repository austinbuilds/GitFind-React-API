import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='container mx-auto py-4'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='text-center'>Developed by Austin</p>
          </div>
        </div>
        <div className='row'>
          <div className='footer-links'>
            <a
              href='https://github.com/austinbuilds'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 117.61 116.857'>
                <path
                  className='icon'
                  d='M479.394,441.137s9.583-.292,16.682,5.533c10.656-2.42,18.664-2.158,30.04,0,8.345-6.586,15.344-5.533,15.344-5.533s4.707.477,2.1,15.756c20.451,41.4-21.125,45.241-21.125,45.241s1.659,2.126,3.2,7.2.326,22.281.477,23.754c63.36-12.242,57.155-116.857-15.547-116.857s-77.733,105.218-14.493,116.857c0,0-.375-3.944-.375-6.909v-6.755s-7.593,1.343-12-.415c-11.064-5.822-8.08-13.2-15.735-16.879a1.686,1.686,0,0,1-1.045-2.357c1.157-1.959,6.192-2,16.78,10.627,1.957,2.02,9.071,1.3,12.379.478.062-3.289,3.352-8.749,3.352-8.749s-41.643-3.957-21.1-45.241c-1.529-13.551,1.067-15.756,1.067-15.756'
                  transform='translate(-452.082 -416.235)'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
