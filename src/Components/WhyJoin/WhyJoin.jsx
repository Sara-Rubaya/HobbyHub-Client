import React, { useState, useEffect } from 'react';


const quotes = [
  "Hobbies are the foundation of happiness and creativity.",
  "The best way to get something done is to begin.",
  "Creativity takes courage. – Henri Matisse",
  "A hobby a day keeps the stress away.",
  "Every expert was once a beginner.",
];

const funFacts = [
  "Did you know? The world’s largest collection of rubber ducks numbers over 5,000!",
  "Fun Fact: Playing video games can improve your problem-solving skills.",
  "Did you know? Reading just 6 minutes a day can reduce stress by 60%.",
  "Fun Fact: Cooking at home can save you up to $2,000 per year compared to dining out.",
  "Did you know? Photography was once banned in several countries during wars for security reasons.",
];

const WhyJoin = () => {
  const [quote, setQuote] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setQuote(randomQuote);
    setFact(randomFact);
  }, []);

  return (
    <div  className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Why Join Section */}
      <section  className="text-center">
        <h2 className="text-4xl text-gray-700 font-bold mb-8">Why Join HobbyHub?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-800 text-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Connect with Like-minded People</h3>
            <p>Meet others who share your passions and build meaningful friendships.</p>
          </div>
          <div className="bg-blue-800 text-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Learn & Grow Your Skills</h3>
            <p>Access resources, workshops, and group activities to level up your hobby.</p>
          </div>
          <div className="bg-blue-800 text-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Stay Motivated & Inspired</h3>
            <p>Join a supportive community that keeps your creativity and enthusiasm alive.</p>
          </div>
        </div>
      </section>

      {/* Get Inspired Section */}
      <section className="max-w-4xl mx-auto p-12 bg-yellow-100 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-700">Get Inspired</h2>
        <blockquote className="italic text-gray-800 mb-4">"{quote}"</blockquote>
        <p className="text-gray-700 font-semibold">{fact}</p>
      </section>
    </div>
  );
};

export default WhyJoin;
