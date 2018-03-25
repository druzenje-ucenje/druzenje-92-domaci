/* Zadatak 2:
 Korak jedan: Napravi varijablu i dodeliti  joj array. Array da sadrzi brojeve od 1 do 5;
 Korak dva: Napisi program koji prolazi kroz array i ispisuje sadrzaj niza u konzoli;
 Korak tri: Modifikuj program da ispise zbir svih brojeva iz niza. */

var nizic = [1, 2, 3, 4, 5];

var zbir = 0;

for (var i = 0; i < nizic.length; i++) {
    console.log(nizic[i]);
    zbir += nizic[i];
}
console.log('zbir (prvi slucaj) svih clanova niza je: ' + zbir);


//  drugo resenje
var zbir2 = nizic.reduce(add, 0);

function add(a, b) {
    return a + b;
}
console.log('zbir (drugi slucaj) svih clanova niza je: ' + zbir2);
