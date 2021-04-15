let myName = process.env.MY_NAME || 'nobody';
let web = process.env.WEB || 'i don\'t have a web';

console.log('Hello ' + myName);
console.log('My web is ' + web);
