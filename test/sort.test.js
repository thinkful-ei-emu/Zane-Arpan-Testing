const sort = require('../index');
const expect = require('chai').expect;

describe('Sorts a list of numbers', () =>{

    it('Sorts array in ascending order', ()=>{

        let expectedlist = [1, 2, 3, 4, 5];
        let testList = sort([5, 4, 3, 2, 1]);

        expect(expectedlist).to.deep.equal(testList);
               
    });

})