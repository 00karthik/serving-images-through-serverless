'use strict';
const fs = require('fs');
module.exports.hello = async (event) => {
  const file = fs.readFileSync('my-image.png');
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
    },
    body: file.toString('base64'),
    isBase64Encoded: true,
  };
};
