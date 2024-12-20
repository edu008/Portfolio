import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';
import { database } from '../configuration';
import { ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [ratingsfromdb, setRatingsfromdb] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackid = uuidv4();

    set(ref(database, 'feedback/' + feedbackid), {
      name: name,
      email: email,
      message: message,
      rating: rating,
      approved: false
    }).then(() => {
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setRating(0);

      // Refresh the page
      window.location.reload();
    }).catch((error) => {
      console.error("Error submitting feedback:", error);
    });
  };

  useEffect(() => {
    const starCountRef = ref(database, 'feedback/');
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const approvedFeedback = [];
      if (data) {
        Object.values(data).forEach((feedback) => { 
          if (feedback.approved) { 
            approvedFeedback.push(feedback);
          } 
        });
      }
      setRatingsfromdb(approvedFeedback);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  return (
    <div className='feedback-container md:p-0 md:pt-24 md:px-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16'>
      {/* Feedback Form */}
      <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
          <LuHeart className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100' size={22}/>
          <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0 pb-2 md:pt-0'>Review</span>
        </div>
      <div className='md:mb-0 relative md:-top-4'>
        <h1 className='md:text-4xl md:font-semibold font-semibold text-4xl'><span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Leave</span> Feedback</h1>
        <hr className='md:w-40 w-32 md:mb-0 mb-4 h-2 mt-3 md:ml-0 lg:mt-2 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'/>
      </div>
      <div className='flex justify-center relative lg:-top-8'>
        <div className='p-4 border md:w-96 md:min-h-96 rounded-lg md:pt-5 md:pr-5 md:pl-5 md:pb-2 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white]'>
          <h1 className='md:font-medium md:text-2xl font-medium text-xl'>Send me your feedback</h1>
          <h1 className='text-sm text-[#64748be2] md:mt-1'>Once the form is submitted, the fields will be reset.</h1>

          <form className='md:mt-0 mt-4' onSubmit={handleSubmit}>
            <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Name</h1>
            <input
              placeholder="Enter your name"
              required
              type='text'
              className='border md:w-full rounded-lg md:h-10 md:pl-4 md:mb-0 mb-1 w-full px-3 h-8'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Email</h1>
            <input
              placeholder="Enter your email"
              type='email'
              required
              className='border md:w-full rounded-lg md:h-10 md:pl-4 md:mb-0 mb-1 w-full px-3 h-8'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Your Message</h1>
            <textarea
              placeholder="Enter your message"
              required
              className='resize-none border md:w-full rounded-lg md:h-14 md:px-4 md:pt-1 w-full px-3 h-20'
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Rating</h1>
            <div className='flex space-x-1 mb-4'>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  color={star <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(star)}
                  className="cursor-pointer"
                />
              ))}
            </div>

            <button
              className="text-white bg-[#0F172A] md:w-full w-full md:h-11 h-9 rounded-full active:scale-100 duration-300 transition-all hover:scale-105 md:mt-0 mt-3"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

{/* Display Feedback from Database */}
<div className='feedback-display mt-8 w-full mb-8 flex flex-col items-center' style={{ paddingBottom: '50px' }}>
  <h2 className='text-3xl font-bold mb-6'>
    <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>User</span> Feedback
  </h2>
  <div className='feedback-cards flex flex-wrap gap-4 justify-center'>
    {ratingsfromdb.map((feedback, index) => (
      <div
        key={index}
        className='feedback-card p-4 border rounded-lg w-60 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-white'
      >
        <h3 className='font-bold'>{feedback.name}</h3>
        <p className='text-sm text-gray-600' style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          {feedback.message}
        </p>
        <div className='flex space-x-1 mt-2'>
          {[...Array(feedback.rating)].map((_, i) => (
            <FaStar key={i} size={20} color='#ffc107' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
