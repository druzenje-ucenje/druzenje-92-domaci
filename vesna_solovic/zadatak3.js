/* Zadatak3:
 Definisati niz nekoliko drzava. 
 Iterirati kroz niz jednom od petlji koje smo radili.
 Ukoliko je u nizu drzava Grcka, ispisati u konozoli: Fica je bio u Grckoj. 
 Ukoliko se Grcka ne nalazi u nasem nizu, ispisati: Fico, idi u Grcku. */

var drzave = ['Albanija', 'Indonezija', 'Finska', 'Grcka'];

// zasto ova varijanta ne radi?.....

// for (var i = 0; i < drzave.length; i++) {
//     if (drzave[i] = 'Grcka') {
//         console.log('Fica je bio u ' + drzave[i] + '-oj.');
//     } else {
//         console.log('Fico, idi u Grcku');
//     }
// }
var i = 0;
if (drzave[i] = 'Grcka') {
    console.log('Fica je bio u ' + drzave[i] + '-oj.');
    i < drzave.length;
    i++;
} else {
    console.log('Fico, idi u Grcku');
}

// ni ovo ne radi - zasto?.......
var drz = ['Albanija', 'Indonezija', 'Finska', 'Grocka', 'Egipat'];
var i = 0;
if (drz[i] = 'Grcka') {
    console.log('Fica je bio u ' + drz[i] + '-oj.');
    i < drz.length;
    i++;
} else {
    console.log('Fico, idi u Grcku');
}


