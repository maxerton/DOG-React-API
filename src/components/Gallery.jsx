import React from 'react';

const Gallery = ({images}) => {
  return (
    <div className='gallery'>
      {
        images.map(im => <div className='img-wrapper'><img src={im} alt="" /></div>)
      }
    </div>
  );
};

export default Gallery;