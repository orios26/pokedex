import React from 'react';
import './styles/DetailsView.css'

function DetailsView(){
    return (
      <section className='details-view'>
        <img className='sprite-image' />
        <div className='data-wrapper'>
          <h1 className='data-name'></h1>
          <p className='data-char'></p>
        </div>
      </section>
    );
};

export default DetailsView;
