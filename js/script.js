// dichiarazione variabili
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeInserito = prompt('inserisci cognome');
// maiuscolo prima lettera
cognomeInserito = cognomeInserito.charAt(0).toUpperCase() + cognomeInserito.slice(1)
cognomi.push(cognomeInserito);
// metto in ordine alfabetico
cognomi.sort();


for (var i = 0; i < cognomi.length; i++) {
    document.getElementById('cognome').innerHTML += i + 1 + '.' + cognomi[i] + "<br>";
}
