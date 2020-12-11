var text = document.getElementsByTagName('pre')[0]
var question = prompt('Ciao, chi sta controllando l\'esercizio, Alfredo o Enrico?' );
text.innerText = 'Ciao ' + question + ', come va la giornata?';
if (question === 'Alfredo') {   //per oggi non uso gli OR perché Ottavio non li ha spiegati
  text.style.color = 'red';
  text.append('\nBeviti un Thé alla mia salute!');
}
if (question === 'Enrico') {
  text.style.color = 'blue';
  text.append('\nBeviti una cioccolata calda alla mia salute!');
}
if (question === 'Ottavio') {
  text.style.backgroundColor = 'black';
  text.style.color = 'white';
  text.append('\nCiao Ottavio, ti dedico un caro underscore');
  text.append('\n_');
} else {
  text.append('\nIn teoria questo è un eserczio che Alfredo o Enrico controllano, ');
  text.append('\nse sei qualcun\'altro ti auguro una buona giornata, ');
  text.append('\ninoltre ti chiedo di avvisare una delle due persone di cui sopra che ho svolto l\'esercizio! ');
  text.append('\nGrazie mille! ')
}
