// Function to get the current time
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  document.getElementById('time').textContent = timeString;
}

// Function to get the greeting based on time
function getGreeting() {
  const hour = new Date().getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  
  // Display just the time-based greeting
  document.getElementById('greeting').innerHTML = `<span class="greeting-time">${greeting}</span>`;
}

// Function to set a random background
function setRandomBackground() {
  const container = document.querySelector('.container');
  
  // Check if we're running as a Chrome extension
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
    // Use the Bing Wallpaper API as specified in the requirements
    container.style.backgroundImage = `url(https://bingw.jasonzeng.dev/?index=random)`;
  } else {
    // We're running directly in a browser, use a fallback
    try {
      // Use Unsplash as a fallback when not in extension context
      const randomNum = Math.floor(Math.random() * 1000);
      container.style.backgroundImage = `url(https://source.unsplash.com/random/1920x1080/?nature,landscape&sig=${randomNum})`;
    } catch (error) {
      // Fallback to a solid color background
      container.style.backgroundColor = '#1a1a2e';
    }
  }
}

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').textContent = `"${quote.text}" - ${quote.author}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  updateTime();
  getGreeting();
  setRandomBackground();
  displayRandomQuote();
  
  // Update time every minute
  setInterval(updateTime, 60000);
}); 