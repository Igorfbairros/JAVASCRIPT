const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);


valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id:3}, false, null, 'teste'); // push add new values in array 
console.log(valores); // Try array for each thing 

console.log(valores.pop()); // take out the last value 
delete valores[0];
console.log(valores);

console.log(typeof valores);

