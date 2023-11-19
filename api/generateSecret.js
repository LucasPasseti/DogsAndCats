// generateSecret.js
const crypto = require('crypto');

// Gera 32 bytes de dados aleatórios
const secret = crypto.randomBytes(32);

// Converte os bytes para uma representação hexadecimal
const secretHex = secret.toString('hex');

console.log('Chave secreta:', secretHex);