const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const code = event.queryStringParameters.code;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code
    })
  });

  const data = await response.json();

  if (data.error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: data.error })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ token: data.access_token })
  };
};