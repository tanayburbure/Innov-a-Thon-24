import { useState } from 'react';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call API to send data to the backend
      const response = await fetch('http://localhost:3000/api/v1/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Feedback stored successfully!');
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Display validation errors or backend errors
        alert(result.message || 'Failed to store feedback.');
        console.error(result.errors || result.error);
      }
    } catch (error) {
      console.error('Error while storing feedback:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[60vh] mt-16 text-white font-[font6] lg:h-[78vh] lg:mt-0 lg:pb-[10vh]">
      <div className="flex flex-col justify-center items-center gap-20 lg:gap-16">
        <h2 className="text-[7vw] lg:text-[2.5vw] lg:pl-[4vw] font-bold mt-4 bg-gradient-to-r from-[#0D7C66] to-[#27DFB3] bg-clip-text text-transparent lg:w-[50%]">
          Send a Message
        </h2>
        <div className="w-[90vw] lg:w-[42%]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[1.5vh] font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Name"
                required
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
                value={formData.email}
                onChange={handleChange}
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Email"
                required
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 py-1 w-full rounded-md border-gray-300 shadow-sm bg-[#C4DAD2] focus:ring-indigo-500 focus:border-indigo-500 pl-2"
                placeholder="Your Message"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#0D7C66] py-1 px-2 border-none rounded-md text-black font-bold"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
