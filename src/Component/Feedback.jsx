import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Feedback = () => {

    // State to store form input values
  const [formData, setFormData] = useState({ name: '', comment: '' });

  // State to store star rating (1 to 5)
  const [rating, setRating] = useState(0);

//   Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', comment: ''});
    setRating(0);
  };

  return (

    // Animated container using framer-motion
    <motion.div 
      className="mt-10 bg-white p-6 rounded-xl shadow-xl max-w-xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-center text-[#f5344e]">Share Your Thoughts!</h3>

      {/* Feedback form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          value={formData.name}
          onChange={(e)=> setFormData(e.target.value)}
          required
        />
        <textarea 
          name="comment"
          placeholder="Your Comments"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          rows={3}
          value={formData.comment}
          onChange={(e)=> setFormData(e.target.value)}
          required
        />

        {/* star rating input */}
         <div className='pl-3'>
            <label className='block mb-2 text-lg'>Rating:</label>
            <div className='flex gap-1'>
           {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            onClick={() => setRating(star)}
            className={`text-xl cursor-pointer ${ rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
            > ★</span>
           ))}
            </div>
         </div>

         {/* submit button */}
        <button 
          type="submit"
          className="bg-[#f5344e] text-white py-2 px-6 rounded-md hover:bg-red-600 transition cursor-pointer"
        >
          Submit Feedback
        </button>
      </form>
    </motion.div>
  );
};

export default Feedback;
