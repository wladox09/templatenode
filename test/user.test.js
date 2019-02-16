/* eslint-disable no-undef */
import User from '../src/user';

test('Object User atribute userName is null', () => {
  const user = new User();
  expect(user.userName).toBeNull();
});

test('Object User atribute userName is not null', () => {
  const params = { userName: 'wladox09' };
  const user = new User(params);
  expect(user.userName).toBe('wladox09');
});

test('Object User all atributes is no null', () => {
  const params = {
    userName: 'wladox09',
    firtsName: 'wladimir',
    lastName: 'campos',
    email: 'wladimir09@gmail.com',
    password: null,
  };
  const user = new User(params);
  expect(user).toEqual(params);
});
