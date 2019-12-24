const url = require('url')

const address = 'https://github.com/dekim2324?tab=repositories';

const parsedURL = url.parse(address, true)

console.log(parsedURL.host);
console.log(parsedURL.pathname);
console.log(parsedURL.query);