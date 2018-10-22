/**
 * @file Groups data from external file into chunks 
 * @param {number} size - amount of items per group
 * @author Joshua Hatcher
 */

const { readFileSync, writeFile } = require('fs')

const rawData = readFileSync('bin/data.json')
const data = JSON.parse(rawData);
const args = require('yargs').argv;
const size = args.size;

if (!size) {
  throw Error('Must pass in a value for chunk size.');
}

let chunkedData = [];

for (let i = 0; i < data.length; i += size) {
  chunkedData.push(data.slice(i, i + size));
}

const stringifiedData = JSON.stringify(chunkedData);

writeFile('bin/chunkedData.json', stringifiedData);
