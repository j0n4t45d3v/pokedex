let fakeDb = [
  {
    username: 'jonatas',
    fullName: 'jonatas de lima',
    email: 'jonatas@gmail.com',
    password: 'senha',
    favorites: []
  },
];

function findUser(email) {
  let user = null;
  for (let i of fakeDb) {
    if (i.email == email) {
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
  
  const user = findUser(email);

  if(user != null && user.password == senha){
    return user
  }
};

export const getFavorites = (email) => {
  const user = findUser(email);

  return user.favorites;
}

export const addFavorite = (email, value) => {
  const user = findUser(email);

  user.favorites.push(value);
}

export const removeFavorite = (email, value) => {
  const user = findUser(email);

  user.favorites.pop(value);
}
