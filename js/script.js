
/*
calcolare la media dei voti:
1* dichiarare delle variabili
2* Far assegnare i valori all'utente
3* stampa PW su pagina
*/

const userName =prompt("Inserise il tuo nome");

const lastNane = prompt("Inserise il tuo cognome");

const colorPref = prompt("Inserise il tuo colore preferito");

const number = 22;

const password= userName+ lastNane+colorPref+number;

const stampa=

`
<p>la tua nuova PassWord è : ${password}</p>

`;

console.log(stampa);

document.getElementById('stampa-qui').innerHTML = stampa;
