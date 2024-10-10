import React, { useState, useEffect } from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'MAGIC SLIDER', type: 'FLOWER', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://images.unsplash.com/photo-1727773366530-1eacf5e4f084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://images.unsplash.com/photo-1726855500757-658894d298eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D', title: 'MAGIC SLIDER', type: 'PLANT', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://plus.unsplash.com/premium_photo-1721522113846-5025ed4b64ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://plus.unsplash.com/premium_photo-1728033936981-600bffc3fda4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://images.unsplash.com/photo-1727434032765-9c4df88b6e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
  { src: 'https://plus.unsplash.com/premium_photo-1728033936981-600bffc3fda4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D', title: 'MAGIC SLIDER', type: 'NATURE', description: 'Lorem ipsum dolor sit amet...' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="slider relative h-full overflow-hidden flex justify-center items-center">
        {/* Main Image Section */}
        <div className="Card absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out">
          <img src={images[currentIndex].src} alt="" className="object-cover w-full h-full" />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white px-12 space-y-4 ">
            <h1 className="text-5xl font-bold">{images[currentIndex].title}</h1>
            <h2 className="text-4xl font-semibold text-green-400">{images[currentIndex].type}</h2>
            <p className="max-w-lg ">{images[currentIndex].description}</p>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-md mt-4">See More</button>
          </div>
        </div>

        {/* Thumbnails Section */}
        <div className="absolute bottom-12 left-[80vw] transform -translate-x-1/2 flex overflow-hidden w-[50vw]">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (20.5 + 15)}%)` }}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt=""
                className={`w-60 h-80 rounded-lg object-cover transition-all duration-300 mx-4 ${
                  index === currentIndex ? 'border-4 border-green-400' : 'opacity-70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[40%] right-24 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="text-white bg-green-500 px-6 py-4 rounded-full focus:outline-none hover:bg-white hover:text-black transition duration-300"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-[40%] right-5 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="text-white bg-green-500 px-6 py-4 rounded-full focus:outline-none hover:bg-white hover:text-black transition duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
