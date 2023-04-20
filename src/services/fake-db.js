let fakeDb = [
  {
    fullName: 'jonatas de lima',
    email: 'jonatas@gmail.com',
    username: 'jonatas',
    password: 'senha',
  },
];

export const insertUser = (user) => {
  fakeDb.push(user);
};

export const getUser = (email, senha) => {
  for (let i of fakeDb) {
    if (i.email === email && i.senha === senha) {
      return i;
    }
  }
  return null;
};
