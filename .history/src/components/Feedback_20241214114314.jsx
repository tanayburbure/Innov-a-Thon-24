import React from 'react';

function Feedback() {
  return (
    // <div className="h-[65vh] mt-32 flex items-start justify-center text-white font-[font6]">
    //   <div className="flex gap-20">
    //     <h2 className="text-[2.2vw] font-bold mt-4 bg-gradient-to-r from-[#0D7C66] to-[#27DFB3] bg-clip-text text-transparent">
    //       Send a Message
    //     </h2>
    //     <div className="w-[40vw]">
    //       <form className="space-y-6">
    //         {/* Name Field */}
    //         <div>
    //           <label htmlFor="name" className="block text-sm font-medium text-gray-600">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             id="name"
    //             className="mt-1 py-2 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
    //             placeholder="Your Name"
    //           />
    //         </div>
    //         {/* Email Field */}
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-600">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             id="email"
    //             className="mt-1 py-2 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
    //             placeholder="Your Email"
    //           />
    //         </div>
    //         {/* Message Field */}
    //         <div>
    //           <label htmlFor="message" className="block text-sm font-medium text-gray-600">
    //             Message
    //           </label>
    //           <textarea
    //             id="message"
    //             name="message"
    //             rows="4"
    //             className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
    //             placeholder="Your Message"
    //           />
    //         </div>
    //         {/* Submit Button */}
    //         <button
    //           type="submit"
    //           className="bg-[#0D7C66] py-2 px-4 border-none rounded-md text-black font-bold "
    //         >
    //           Send
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[60vh] mt-16 text-white font-[font6] lg:h-[70vh]">
      <div className="flex flex-col justify-center items-center gap-20 lg:flex lg:items-start lg:justify-between">
        <h2 className="text-[7vw] font-bold mt-4 bg-gradient-to-r from-[#0D7C66] to-[#27DFB3] bg-clip-text text-transparent">
          Send a Message
        </h2>
        <div className="w-[90vw]">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[1.5vh] font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[1.5vh] font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Email"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-[1.5vh] font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Message"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#0D7C66] py-1 px-2 border-none rounded-md text-black font-bold "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
