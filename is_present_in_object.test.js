const check = require('./is_present_in_object');

test('Cheking object', () => {
  expect(check()).toEqual(expect.objectContaining({name : "Yaroslav"}));
});
test('Cheking object (failed)', () => {
  expect(check()).not.toEqual(expect.objectContaining({name : "Dima"}));
});
