import React, { useState } from 'react'

function Faq() {
  const [showAnswer, setShowAnswer] = useState({});

  const questions = [
    "What is the purpose of the Innov-a-Thon?",
    "How can I register for the event?",
    "What are the eligibility criteria?",
    "Is there a participation fee?",
    "What resources will be provided during the event?",
    "Can I participate as a team?",
    "What is the duration of the event?",
    "Are there any prizes for the winners?",
    "What kind of projects can I work on?",
    "Will there be mentors available?",
    "How will the judging process work?",
    "Can I submit a project that I started before the event?",
    
  ];

  const answers = [
    "The Innov-a-Thon aims to foster creativity and innovation in technology.",
    "You can register through our official website.",
    "Participants must be at least 18 years old and currently enrolled in a university.",
    "No, participation is free of charge.",
    "We will provide food, drinks, and access to various tools and technologies.",
    "Yes, teams of up to 4 members are allowed.",
    "The event lasts for 24 hours, starting from noon on the first day.",
    "Yes, there will be prizes for the top three projects.",
    "You can work on any project that addresses real-world challenges.",
    "Yes, experienced mentors will be available to guide participants.",
    "Judging will be based on creativity, technical implementation, and presentation.",
    "Yes, as long as you make significant progress during the event.",
   
  ];

  const toggleAnswer = (index) => {
    setShowAnswer(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='min-h-[100vh] p-12 w-full'>
        <div className='text-white'>
            <h1 className='text-[2vw] text-zinc-400 ml-12 font-semibold'> <span className='text-[#0D7C66] text-[4vw]'>FREQUENTLY</span> Asked Questions</h1>
        </div>
        <div className='flex text-zinc-400 p-14 gap-8 mt-16 font-light'>
          <div className='w-1/2 text-[1.3vw]'> {/* Increased question size */}
            {questions.slice(0, 6).map((question, index) => (
              <div key={index} className='mb-4'> {/* Increased gap between questions */}
                <h2 onClick={() => toggleAnswer(index)} className='cursor-pointer'>
                  <span className='text-[2vw]'>{showAnswer[index] ? '-' : '+'}</span> {question}
                </h2>
                {showAnswer[index] && <p className='px-4 text-[1.2vw]'>{answers[index]}</p>} {/* Added px-4 to answers */}
              </div>
            ))}
          </div>
          <div className='w-1/2 text-[1.3vw]'> {/* Increased question size */}
            {questions.slice(6, 12).map((question, index) => (
              <div key={index} className='mb-4 text-[1.3vw]'> {/* Increased gap between questions */}
                <h2 onClick={() => toggleAnswer(index + 8)} className='cursor-pointer'>
                  <span className='text-[2vw]'>{showAnswer[index + 8] ? '-' : '+'}</span> {question}
                </h2>
                {showAnswer[index + 8] && <p className='px-4 text-[1.2vw]'>{answers[index + 8]}</p>} {/* Added px-4 to answers */}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Faq