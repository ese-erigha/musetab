const quotes = [
  // Naval Ravikant quotes
  {
    text: "The purpose of life is to learn, the purpose of death is to forget.",
    author: "Naval Ravikant"
  },
  {
    text: "Happiness is a state where nothing is missing.",
    author: "Naval Ravikant"
  },
  {
    text: "If you want to be successful, surround yourself with people who are more successful than you are.",
    author: "Naval Ravikant"
  },
  {
    text: "The most important skill for getting rich is becoming a perpetual learner.",
    author: "Naval Ravikant"
  },
  {
    text: "The purpose of wealth is freedom. It's nothing more than that. It's not to buy fur coats, or drive Ferraris, or sail yachts, or jet around the world in your Gulfstream. That stuff gets really old and really stupid, really fast. It's about freedom.",
    author: "Naval Ravikant"
  },
  {
    text: "If you can't decide, the answer is no.",
    author: "Naval Ravikant"
  },
  {
    text: "If you want to make the wrong decision, ask everyone.",
    author: "Naval Ravikant"
  },
  {
    text: "The best way to stay poor is to stay in school.",
    author: "Naval Ravikant"
  },
  {
    text: "The best way to get what you want is to deserve what you want.",
    author: "Naval Ravikant"
  },
  {
    text: "The best way to learn anything is to practice it in public.",
    author: "Naval Ravikant"
  },
  
  // Simon Sinek quotes
  {
    text: "People don't buy what you do; they buy why you do it.",
    author: "Simon Sinek"
  },
  {
    text: "Leadership is not about being in charge. Leadership is about taking care of those in your charge.",
    author: "Simon Sinek"
  },
  {
    text: "The goal is not to be perfect. The goal is to be better.",
    author: "Simon Sinek"
  },
  {
    text: "Working hard for something we don't care about is called stress. Working hard for something we love is called passion.",
    author: "Simon Sinek"
  },
  {
    text: "If you hire people just because they can do a job, they'll work for your money. But if you hire people who believe what you believe, they'll work for you with blood and sweat and tears.",
    author: "Simon Sinek"
  },
  {
    text: "The more we try to be perfect, the more we become imperfect.",
    author: "Simon Sinek"
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Simon Sinek"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Simon Sinek"
  },
  {
    text: "The best leaders are the best listeners.",
    author: "Simon Sinek"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Simon Sinek"
  },
  
  // Jordan Peterson quotes
  {
    text: "If you want to change the world, start by cleaning your room.",
    author: "Jordan Peterson"
  },
  {
    text: "The purpose of life is to find a mode of being that's so meaningful that the fact that life is suffering is no longer relevant.",
    author: "Jordan Peterson"
  },
  {
    text: "You're not everything you could be, and you know it.",
    author: "Jordan Peterson"
  },
  {
    text: "The better you are at something, the more likely you are to be criticized for it.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the less you fear.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the more you can do.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the more you can be.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the more you can give.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the more you can love.",
    author: "Jordan Peterson"
  },
  {
    text: "The more you know, the more you can live.",
    author: "Jordan Peterson"
  },
  
  // Jay Shetty quotes
  {
    text: "The purpose of life is to learn, the purpose of death is to forget.",
    author: "Jay Shetty"
  },
  {
    text: "Happiness is a state where nothing is missing.",
    author: "Jay Shetty"
  },
  {
    text: "If you want to be successful, surround yourself with people who are more successful than you are.",
    author: "Jay Shetty"
  },
  {
    text: "The most important skill for getting rich is becoming a perpetual learner.",
    author: "Jay Shetty"
  },
  {
    text: "The purpose of wealth is freedom. It's nothing more than that. It's not to buy fur coats, or drive Ferraris, or sail yachts, or jet around the world in your Gulfstream. That stuff gets really old and really stupid, really fast. It's about freedom.",
    author: "Jay Shetty"
  },
  {
    text: "If you can't decide, the answer is no.",
    author: "Jay Shetty"
  },
  {
    text: "If you want to make the wrong decision, ask everyone.",
    author: "Jay Shetty"
  },
  {
    text: "The best way to stay poor is to stay in school.",
    author: "Jay Shetty"
  },
  {
    text: "The best way to get what you want is to deserve what you want.",
    author: "Jay Shetty"
  },
  {
    text: "The best way to learn anything is to practice it in public.",
    author: "Jay Shetty"
  },
  
  // African Proverbs
  {
    text: "If you want to go quickly, go alone. If you want to go far, go together.",
    author: "African Proverb"
  },
  {
    text: "The child who is not embraced by the village will burn it down to feel its warmth.",
    author: "African Proverb"
  },
  {
    text: "When the roots of a tree begin to decay, it spreads death to the branches.",
    author: "African Proverb"
  },
  {
    text: "A roaring lion kills no game.",
    author: "African Proverb"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "African Proverb"
  },
  {
    text: "He who learns, teaches.",
    author: "African Proverb"
  },
  {
    text: "The fool speaks, the wise man listens.",
    author: "African Proverb"
  },
  {
    text: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    author: "African Proverb"
  },
  {
    text: "The axe forgets, but the tree remembers.",
    author: "African Proverb"
  },
  {
    text: "When you follow in the path of your father, you learn to walk like him.",
    author: "African Proverb"
  },
  {
    text: "A single bracelet does not jingle.",
    author: "African Proverb"
  },
  {
    text: "The heart of the wise man lies quiet like limpid water.",
    author: "African Proverb"
  },
  {
    text: "He who thinks he is leading and has no one following him is only taking a walk.",
    author: "African Proverb"
  },
  {
    text: "If you close your eyes to facts, you will learn through accidents.",
    author: "African Proverb"
  },
  {
    text: "The one who loves you will make you cry, the one who hates you will make you laugh.",
    author: "African Proverb"
  },
  {
    text: "A family is like a forest, if you are outside it is dense, if you are inside you see that each tree has its position.",
    author: "African Proverb"
  },
  {
    text: "The eye of the eagle sees the ant on the ground.",
    author: "African Proverb"
  },
  {
    text: "A person who has not traveled has only read one page of a book.",
    author: "African Proverb"
  },
  {
    text: "The one who forgives ends the argument.",
    author: "African Proverb"
  },
  {
    text: "A person with too much ambition cannot sleep in peace.",
    author: "African Proverb"
  }
]; 