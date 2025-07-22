const fs = require('fs');
const jwt = require('jsonwebtoken');

// Load the private key you created during CSR step
const privateKey = fs.readFileSync('./private.key');

// JWT payload – this is what HSBC expects
const payload = {
  iss: 'Mzueb0pXoODOUm6vnqNn8JJlArCagTzJ',  // Your Client ID
  sub: 'Mzueb0pXoODOUm6vnqNn8JJlArCagTzJ',  // Your Client ID again
  aud: 'https://sandbox.hsbc.com/token',    // HSBC Token Endpoint
  jti: Math.random().toString(36).substring(7), // Unique random string
  exp: Math.floor(Date.now() / 1000) + 300  // 5 min expiry
};

// JWT header – includes KID
const jwtHeader = {
  alg: 'PS256',
  typ: 'JWT',
  kid: 'b309eb86-3caf-4caa-9b5d-410993d99fc8' // Your KID string from dashboard
};

// Create the signed JWT
const signedToken = jwt.sign(payload, privateKey, {
  algorithm: 'PS256',
  header: jwtHeader
})

// Output the signed token
console.log('Signed JWT:\n', signedToken);


