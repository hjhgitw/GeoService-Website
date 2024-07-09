const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Read the index.html file
let html = fs.readFileSync('index.html', 'utf8');

// Replace the placeholder with the environment variable
const adsenseAccount = process.env.ADSENSE_ACCOUNT || 'default-value';
html = html.replace(
    '<meta name="google-adsense-account" content="ca-pub-7676441973228396">',
    `<meta name="google-adsense-account" content="${adsenseAccount}">`
);

// Write the modified HTML back to the file
fs.writeFileSync('index.html', html);
console.log('index.html updated with Google AdSense account.');