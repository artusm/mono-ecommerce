const crypto = require('crypto');

const baseGenerate = (bytes = 16) =>
  crypto.randomBytes(bytes).toString('base64');

const keys = [...new Array(3).keys()].map(() => baseGenerate(6));

console.log('APP_KEYS' + '=' + JSON.stringify(keys));
console.log('JWT_SECRET' + '=' + baseGenerate());
console.log('ADMIN_JWT_SECRET' + '=' + baseGenerate());
console.log('API_TOKEN_SALT' + '=' + baseGenerate());
console.log('FULL_ACCESS_TOKEN' + '=' + baseGenerate(128));
