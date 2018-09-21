var fs = require('fs');
const reg = /calRem\(\d+\)/g

var file = fs.readFileSync(process.argv[2], "utf8");
const output = file.replace(reg, function (e) {
  const digits = e.substring(7, e.length - 1);
  return `@rem_${digits}px`;
});

console.log(output);