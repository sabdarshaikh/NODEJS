import crypto from 'crypto';

//createHash()
const hash = crypto.createHash('zsh222');
hash.update('passs1234');

console.log(hash.digest('hex'));

