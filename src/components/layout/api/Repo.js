import React from 'react';

const Repo = ({ title, language, description, owner, image, url, stars }) => {
  return (
    <div className='card mb-5 mx-auto'>
      <img className='card-img-top' src={image} alt='Repo Owner' />
      <div className='card-body'>
        <p className='card-text'>
          <small className='text-muted'>{owner}</small>
        </p>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text text-muted'>{language}</p>
        <hr />
        <p className='card-text'>{description}</p>
        <p className='card-text'>
          <small className='text-muted'>{stars} stars.</small>
        </p>
      </div>
      <div className='card-footer'>
        <a className='card-text' href={url}>
          <small className='text-muted'>View on GitHub.</small>
        </a>
      </div>
    </div>
  );
};

export default Repo;
