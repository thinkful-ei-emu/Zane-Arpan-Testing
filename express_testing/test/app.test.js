const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

// describe('Express App', () => {
//   it('GET / should return a message', () => {
//     return request(app)
//       .get('/')
//       .expect(200, 'Hello Express!');
//   });
// });

// describe('GET /sum', ()=>{

//   it('8/4 = 2', ()=>{

//     return request(app)
//       .get('/sum')
//       .query({a:8, b:4})
//       .expect(200, '8 divided by 4 is 2');
//   });

//   it('should return 400 if a is missing', ()=>{
//     return request(app)
//       .get('/sum')
//       .query({b:4})
//       .expect(400, 'Value for a is needed');
//   });


// });

describe('GET/frequency', () => {
  it('Object Returns as expected', () => {
    return request(app).get('/frequency')
      .query({ s: 'aaBBAAbbaa' }).expect(200, {
        'count': 2,
        'average': 5,
        'highest': 'a',
        'a': 6,
        'b': 4
      });
  });
  it('Should get Invalid Request if s is undefined ',()=>{
    return request(app).get('/frequency').query({})
      .expect(400,'Invalid request');
  });
});
