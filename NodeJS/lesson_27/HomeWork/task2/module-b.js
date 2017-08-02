var counter1 = require('./module-a')(1);
var counter2 = require('./module-a')(2);
console.log(counter1.count);
console.log(counter2.count);