const axios = require('axios');
const chai = require('chai');
const expectedBreedCount = require('./expectedBreedCount.json');
const response = axios.get('https://dog.ceo/api/breeds/list/all');

// Count all sub breeds for a breed. If no subbreeds, should read 0
async function getBreedCount() {
    let data = {};
    for (const [key, value] of Object.entries((await response).data.message)) {
      data[key] = value.length;
    }
    return data;
}


// Get a picture of sub-breed. Ex: 'basset'
async function getRandomImageOfSubBreed(subBreed) {
    for (const [key, value] of Object.entries((await response).data.message)) {
        var breed;
        if(value.includes(subBreed)){
            breed = key;
            break;
        }
      }
    let photo = await axios.get('https://dog.ceo/api/breed/'+breed+'/'+subBreed+'/images/random');
    return photo.data.message;
}

// NO NEED TO MODIFY ANY LINES BELOW THIS POINT
// --------------------------------------------------------------------------
async function execute() {
    let breedCount = await getBreedCount();
    let image = await getRandomImageOfSubBreed('basset');
    console.log(breedCount);
    console.log(image);

    try {
        chai.expect(breedCount).to.deep.eq(expectedBreedCount);
        chai.expect(image).to.contain('https://images.dog.ceo/breeds/hound-basset/');
        console.log('PASSED: 👍');
    } catch (e) {
        console.log('FIX ME: 👎');
    }
}
execute();
