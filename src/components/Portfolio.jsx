import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Make sure to include the Tailwind CSS styles

const Portfolio = ({ images, interval = 3000, transitionDuration = 500 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === images.length -1 ? 0 : prevIndex+1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const effectiveIndex = currentImageIndex === images.length ? 0 : currentImageIndex;

  return (
    <div className="relative overflow-hidden mb-10">
      <h3 className='font-MontserratAlternates flex w-full  justify-center my-4'>Our Concern Portfolio</h3>

      <div
        className="flex transition-transform ease-in-out duration-500 transform"
        style={{
          transform: `translateX(-${effectiveIndex * 100}%)`,
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {/* <img
          src={images[0]}
          alt={`slide-clone`}
          className="w-full h-auto"
          style={{ opacity: effectiveIndex === 0 ? 0 : 1 }}
        /> */}
        {/* <div> */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="w-[100%] h-[30rem] object-cover flex justify-center"
          />
        ))}
        {/* </div> */}

        {/* Cloned version of the first image for smooth transition */}
        {/* <img
          src={images[0]}
          alt={`slide-clone`}
          className="w-full h-[667px]"
          style={{ opacity: effectiveIndex === 0 ? 0 : 1 }}
        /> */}
        {/* <img
          src={images[0]}
          alt={`slide-clone`}
          className="w-full h-auto"
          style={{ opacity: effectiveIndex === 0 ? 0 : 1 }}
        /> */}
      </div>

      <div className="bottom-4 left-1/2 flex space-x-2 mt-5 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-4 w-4 rounded-full ${
              effectiveIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};



export default Portfolio;
