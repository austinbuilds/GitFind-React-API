import React, { useEffect, useState } from 'react';

function Rate() {
  const [rates, setRates] = useState([{}]);

  useEffect((rates) => {
    const URL = `https://api.github.com/rate_limit`;
    const getRate = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      setRates(json);
      console.log(rates);
    };
    getRate();
  }, []);

  let info = '';
  let msg = '';
  if (rates && rates.resources) {
    info = rates.resources;
    if (info.search.remaining === 0) {
      msg =
        'GitHub API request limit reached. Please try again after 1 minute.';
    } else {
      msg = `GitHub API request limit remaining: ${info.search.remaining}.`;
    }
  }

  return (
    <div>
      <div className='rate'>
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default Rate;
