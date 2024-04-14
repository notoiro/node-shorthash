var sh = require("../index.js");

console.log(sh.unique('foobar@example.com'));
// you will get: Z1bL2tE

console.log(sh.unique('my name is really big big and big...'));
// you will get: Z1TirWS

console.log(sh.unique('万里长城永不倒。。。'));
// you will get: 2r6EFF

console.log(sh.unique('和平'));
// you will get: 33NM
