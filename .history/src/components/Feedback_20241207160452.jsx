import React from 'react'

function Feedback() {
    return (
        <div className='h-[65vh] mt-32 mr-12 flex font-[font6] items-start justify-center text-white'>
            <div className='flex gap-20'>
            <h2 className='text-[2.2vw] font-bold  mt-4 bg-gradient-to-r from-[#0D7C66] to-[#27DFB3] bg-clip-text text-transparent'>Send a Message</h2>
            <div className='w-[40vw]'>
                <form className='space-y-8 text-black '>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-600 '>Name</label>
                        <input type="text" name="name" id="name" className='mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-2' placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-600 '>Email</label>
                        <input type="email" name="email" id="email" className='mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-2' placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-600 '>Message</label>
                        <textarea id="message" name="message" rows="5" className='mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-2' placeholder='Your Message'></textarea>
                    </div>
                    <button type="submit" className='inline-flex justify-center rounded-md border border-transparent bg-[#0D7C66] py-2 px-4 text-md font-bold text-'>Send</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Feedback