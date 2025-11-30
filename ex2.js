let prenom = "Sara";
let age = 22;

let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase);

// Modifier l'âge sans recréer toute la phrase
age = 23;
phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase);
