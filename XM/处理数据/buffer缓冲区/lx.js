var buf=new Buffer(5);
console.log(buf);

console.log(buf.length);
buf.write('a');
console.log(buf);

buf.write('b',1,1,'ascii');
console.log(buf);

buf.write('c',2,1,'ascii');
console.log(buf);

buf.write('d');
console.log(buf);

buf.write('刘','utf8');
console.log(buf);

