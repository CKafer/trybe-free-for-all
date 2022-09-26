const person = { 
  firstPerson: 'Joana',
  lastName: 'Pereira',
  age: 43,
  canDrive: true,
  favoriteMovies:   ['Star Wars', 'Avengers', 'Interestelar'],
  favoriteAlbum: ['Skank'],
}

person.lastName = 'Alves Pereira';
person.adress = {
  street: 'Rua X Y Z',
  number: '1234',
}

//person.FavoriteFood = 'Doritos';
person['FavoriteFood'] = 'Doritos';

// Deletar Informações do Objeto
delete person.favoriteAlbum;

// Console Log

//console.log(person.adress.street);
//console.log(person.adress['street']);

console.log(person);