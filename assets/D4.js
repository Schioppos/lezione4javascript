/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
       return l1 * l2;
    }

  const lunghezza1 = 5;
  const lunghezza2 = 8;
  const risultato = area(lunghezza1, lunghezza2);
  console.log("L'area del rettangolo è: " + risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (num1,num2){
    if(num1 === num2){
    return    (num1 + num2) * 3;
    } else { 
    return num1 + num2;
  }
}

let n1 = parseInt(prompt("inserisci il primo numero"))
let n2 = parseInt(prompt("inserisci il secondo numero"))
let result = crazySum(n1,n2)
console.log(result)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (numF){
let diffAssoluta = Math.abs(numF-19)
if(numF>19){
    return diffAssoluta * 3
} else {
    return diffAssoluta
  }
}

let numDifAss = parseInt(prompt("inserisci un numero"))
let diffRisultato = crazyDiff(numDifAss)
console.log(diffRisultato)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (nIntero) {
    return (nIntero >= 20 && nIntero <= 100 || nIntero === 400);
}

console.log(boundary(50))
console.log(boundary(10))
console.log(boundary(190))
console.log(boundary(400))




/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(String) {
    if (String.startsWith("EPICODE")) {
    return    String;
    } else {
        return "EPICODE" + String;
    }
}
  

  
  


let  epiAdd = prompt("aggiungi una stringa di teso")

let exitText = epify(epiAdd)

console.log(exitText)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numPos){
 if (numPos % 3 === 0 || numPos % 7 === 0){
    return true
 }else {
    return (" non è un multiplo di 3 o 7 ")
 }
}

let controlloMult = parseInt(prompt("inserisci un numero che è un multiplo di 3 o 7"))
let risultControl = check3and7(controlloMult)
console.log(risultControl)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (parolaInvert){
 return parolaInvert.split("").reverse().join("")  
}


let invertParola = prompt("inserisci parola da invertire")

let risultInvert = reverseString(invertParola)
console.log(risultInvert)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst (diffWords){
    diffWords.charAt(0).slice(1).toUpperCase()
}

let fraseMaiusc = prompt("Inserisci frase lettera iniziale maiuscola")
let risultMaiusc = upperFirst(fraseMaiusc)
console.log(risultMaiusc)


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (stringaCut){
if(stringaCut < 3){
    return stringaCut
}else{
 return   stringaCut.slice(1,-1)
}
}


let cutFrase = prompt("Inserisci frase da tagliare")
let risultCut = cutString(cutFrase)

console.log(risultCut)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
      randomNumbers.push(randomNumber); // Aggiungi il numero casuale all'array
    }
    return randomNumbers;
  }
  let n = parseInt(prompt("inserisci quanti numeri casuali vuoi visualizzare")); 
  const randomArray = giveMeRandom(n);
  console.log(randomArray); 
  




