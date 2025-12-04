function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = Number(prompt("Total HT : "));
let remise = Number(prompt("Remise (%) : "));

console.log("Total final = " + totalAvecRemise(total, remise));
