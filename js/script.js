var password = document.getElementById('password')
var name = prompt('Ciao, qual\'è il tuo nome?');
var surname = prompt('E il tuo cognome, invece?');
var color = prompt('Infine, il tuo colore preferito?');
var year = new Date().getFullYear();
password.innerText = name + surname + color + year;
