let sum = 0;
for(let i = 1; i <= 100; i++) {
  if(i % 2 === 0) {
    sum += i;
  }
}
console.log("1 到 100 的偶数和为： " + sum);