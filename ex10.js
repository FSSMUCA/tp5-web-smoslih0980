//Version itérative
function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
//Version récursive
function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

// 1) La version itérative est plus lisible et plus simple à comprendre.
// 2) La version itérative est plus rapide et consomme moins de mémoire.
// 3) Oui, risque de stack overflow si n est trop grand (car trop d’appels imbriqués dans la pile).
// 4) Quand on a de grandes valeurs,on veut de la performance,la logique est simple (somme, recherche, tableau…),on veut éviter de saturer la mémoire. 
