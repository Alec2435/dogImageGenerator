'use strict';
const dogImage = require('./dogImageGenerator.js');
module.exports.getDog  = async (event, context) => {
  try{
    return {
      statusCode: 200,
      headers: {"content-type": "text/html"},
      body: '<img src="'+(await dogImage.getImage(event.pathParameters.subBreed))+'">',
    };
  } catch(error){
    return {
      statusCode: 200,
      headers: {"content-type": "text/html"},
      body: 'Dog breed not found please try again',
    };
  }
};
