let fakeDb = [
  {
    username: 'jonatas',
    fullName: 'jonatas de lima',
    email: 'jonatas@gmail.com',
    password: 'senha',
  },
];

function findUser(email, password) {
  let user = null;
  for (let i of fakeDb) {
    if (i.email == email && i.password == password) {
      user = i;
      break;
    }
  }
  return user;
}

export const insertUser = (user) => {
  fakeDb.push(user);
  return "OK"
};

export const getUser = (email, senha) => {
  return findUser(email, senha);
};
