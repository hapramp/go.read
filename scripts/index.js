const MarkdownFromAPI = require('./MarkdownFromAPI');

//Photography Challenges From API
const getPhotographyChallengeMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/challenges?domain=photography',
  tags:['Challenge', 'Photography']
});

//Art Challenges From API
const getArtChallengeMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/challenges?domain=art',
  tags:['Challenge', 'Art']
});

//Writing Challenges From API
const getWritingChallengeMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/challenges?domain=writing',
  tags:['Challenge', 'Writing']
});


//Contests From API
const getPhotographyContestMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/contests?domain=photography',
  tags:['Contest','Photography']
});

const getArtContestMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/contests?domain=art',
  tags:['Contest','Art']
});

// Loads Challenges of different domain
getPhotographyChallengeMarkdown.init();
getArtChallengeMarkdown.init();
getWritingChallengeMarkdown.init();

//Loads Contest of different domians
getPhotographyContestMarkdown.init();
getArtContestMarkdown.init();