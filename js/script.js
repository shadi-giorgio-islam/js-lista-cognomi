var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
cognomi.push(prompt('inserisci cognome'));
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('cognome').innerHTML += i + 1 + '.' + cognomi[i] + "<br>";
}
