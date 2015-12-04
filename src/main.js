import Person from './person.js';
var body = document.querySelector('body');
body.textContent = 'Demonstration by' + new Person( "Thomas" , "Winckell" ) + " and " + new Person( "Karl" , "Devooght" );
