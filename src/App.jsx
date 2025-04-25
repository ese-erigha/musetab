import React, { useState, useEffect } from 'react';
import { quotes } from './quotes';
import './styles.css';

function App() {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });
  const [background, setBackground] = useState('linear-gradient(to right, #2c3e50, #3498db)');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Set greeting based on time of day
    const setGreetingBasedOnTime = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 18) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };

    setGreetingBasedOnTime();

    // Set random quote
      const getRandomQuote = () => {
      const min = 1;
      const max = quotes.length;
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      setCurrentQuote(quotes[randomIndex]);
    };

    getRandomQuote();

    // Set background image
    const setBackgroundImage = () => {
      const timestamp = Date.now();
      const url = `https://bingw.jasonzeng.dev/?index=random&t=${timestamp}`;
      console.log('Setting background to:', url);
      setBackground(`url(${url})`);
      setIsLoading(false);
    };

    setBackgroundImage();

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect runs once when component mounts

  return (
    <div className={`container ${isLoading ? 'loading' : ''}`} style={{ 
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="content">
        <div className="greeting">{greeting}</div>
        <div className="time">{time}</div>
        <div className="quote">
          <p>{currentQuote.text}</p>
          <p className="author">- {currentQuote.author}</p>
        </div>
      </div>
    </div>
  );
}

export default App; 