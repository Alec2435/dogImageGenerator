const axios = require('axios');
const chai = require('chai');
const expectedBreedCount = require('./expectedBreedCount.json');

// Count all sub breeds for a breed. If no subbreeds, should read 0
async function getBreedCount() {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    let data = {};
    for (const [key, value] of Object.entries(response.data.message)) {
      data[key] = value.length;
    }
    return data;
}

// Get a picture of sub-breed. Ex: 'basset'
async function getRandomImageOfSubBreed(subBreed) {
    // COMPLETE MISSING CODE HERE:

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
        //chai.expect(image).to.contain('https://images.dog.ceo/breeds/hound-basset/');
        console.log('PASSED: 👍');
    } catch (e) {
        console.log('FIX ME: 👎');
    }
}
execute();
