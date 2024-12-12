import React from 'react'

function Sponsors() {
  const sponsorImages = [
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
  ];

  return (
    <div className='flex flex-col font-[font1] mt-12 items-center font-semibold gap-8 justify-start h-[100vh] w-full text-white'>
      <h1 className='text-[8vw] tracking-tighter text-zinc-300'>Our <span className='text-[#0D7C66]'>Sponsors</span></h1>
      <div className="flex flex-wrap justify-center gap-4 mt-16">
        {sponsorImages.map((image, index) => (
          <img key={index} src={image} alt={`Lobo ${index + 1}`} style={{height: '20vh'}} />
        ))}
      </div>
      
    </div>
  )
}

export default Sponsors