const MarkdownFromAPI = require('./MarkdownFromAPI');

//Challenges From API
const getChallengeMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/challenges/',
  tag:'Challenge'
});

//Contests From API
const getContestMarkdown = new MarkdownFromAPI({
  path: '../src/pages/blog',
  apiUrl: 'https://beta-api.hapramp.com/contests/',
  tag:'Contest'
});

getChallengeMarkdown.init();
getContestMarkdown.init();