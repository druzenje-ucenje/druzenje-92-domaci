/* Zadatak 2:
 Korak jedan: Napravi varijablu i dodeliti  joj array. Array da sadrzi brojeve od 1 do 5;
 Korak dva: Napisi program koji prolazi kroz array i ispisuje sadrzaj niza u konzoli;
 Korak tri: Modifikuj program da ispise zbir svih brojeva iz niza. */

var nizic = [1, 2, 3, 4, 5];

for (var i = 0; i < nizic.length; i++) {
    console.log(nizic[i]);
}

var zbir = nizic.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log('zbir svih clanova niza je: ' + zbir);
