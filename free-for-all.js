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

//console.log(person);

// Exemplo de FOR IN
for ( key in person ) {
  //console.log('Chave:', key);
}

for ( key in person ) {
  console.log('Valor:', person[key]);
  //console.log('Valor:', person.key); // Usando dot não funciona
}


