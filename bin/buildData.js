const { readFileSync, writeFile } = require('fs')

let data = readFileSync('bin/names.txt')
.toString()
.split('\n')
.map(function(name) {
  return {
    name: name,
    id: Math.floor(Math.random() * Math.floor(10000000))
  };
});

const args = require('yargs').argv;
const chunk = args.chunk;

if (chunk) {
  let chunkedData = [];

  for (let i = 0; i < data.length; i += chunk) {
    chunkedData.push(data.slice(i, i + chunk));
  }

  data = chunkedData;
}

const stringifiedData = JSON.stringify(data);

writeFile('data.json', stringifiedData);
