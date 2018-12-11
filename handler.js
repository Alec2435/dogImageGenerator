'use strict';
const dogImage = require('./dogImageGenerator.js');
module.exports.getDog  = async (event, context) => {
  //const image = await dogImage.getImage(event.path.subBreed);
  //console.log(f);
  return {
    statusCode: 200,
    body: event,
  };

  // Use thfis code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
