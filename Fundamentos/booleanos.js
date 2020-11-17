let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// isAtivo = 1
// console.log(isAtivo);

// isAtivo = 1
// console.log(!isAtivo);

isAtivo = 1
console.log(!!isAtivo);

// isAtivo = 1
// console.log(!true);

console.log("Os Verdadeiros....");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os Falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(('' || null || 0 || "epa")); // ou vai retornar True ou o unico valor verdadeiro no caso epa 
console.log(!!('' || null || 0 || " "));

let nome = ''; // se não tiver nome vai dar falso 
console.log(nome || "Desconhecido");
