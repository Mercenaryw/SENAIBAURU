var num = 123;
var c, d, u;

c = 1 * Math.trunc(num / 100)
d = 10 * Math.trunc(num % 100 / 10)
u = 100 * (num % 10)//resto da divisão
var num_invt = c + d + u

console.log(num_invt);


