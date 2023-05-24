const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(
  path.join('./input.txt'),
  {encoding: 'utf-8'},
  (err) => {
    console.log('err :>> ', err);
  }
);

function Check(data) {
  res = '';
  res = data
    .replace(/^\.{1,2}/, '')
    .replace(/\.{1,2}$/, '')
    .replace(/(?<=\/)\.{1,2}(?<=\/)/g, '/')
    .replace(/\/{2,100}/g, '/')
    .replace(/\/.{1,2}\//g, '/')
    .replace(/(?<=.)\/$/, '');

  return res;
}

fs.writeFileSync('output.txt', String(Check(input)));
