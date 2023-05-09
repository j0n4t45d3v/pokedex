let fakeDb = [
  {
    username: 'jonatas',
    fullName: 'jonatas de lima',
    email: 'jonatas@gmail.com',
    password: 'senha',
    favorites: [],
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
  return 'OK';
};

export const getUser = (email, senha) => {
  const user = findUser(email);
  if (user != null && user.password == senha) {
    return user;
  }
  return "usuario não encontrado"
};

export const getFavorites = (email) => {
  const user = findUser(email);

  return user.favorites;
};

export const addFavorite = (email, value) => {
  let user = findUser(email);
  const localUser = JSON.parse(localStorage.getItem("user"));
  user = localUser;

  if (user != null && user.favorites != null) {
    user.favorites.push(value);
    localStorage.setItem("user", JSON.stringify(user));
  }else {
    console.log("O objeto 'user' não foi encontrado ou está definido incorretamente.");
  }
};

export const removeFavorite = (email, value) => {
  let user = findUser(email);
  const localUser = JSON.parse(localStorage.getItem("user"));
  user = localUser;

  const updatedFavorites = user.favorites.filter((favorite) => favorite !== value);
  user.favorites = updatedFavorites;
  
  localStorage.setItem("user", JSON.stringify(user));
};
