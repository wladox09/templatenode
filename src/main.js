import User from './user';

const params = {
  userName: 'wladox09',
  firtsName: 'wladimir',
  lastName: 'campos',
  email: 'wladimir09@gmail.com',
};

const user = new User(params);
const user1 = new User();

console.log(`Usuario: ${user.firtsName} ${user.lastName}`);

console.log(`Usuario: ${user1.firtsName} ${user1.lastName}`);
