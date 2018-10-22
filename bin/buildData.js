/**
 * @file Creates a JSON file of dummy data from a list of names for use in demoing this plugin
 * @author Joshua Hatcher
 */

const { readFileSync, writeFile } = require('fs')

const data = readFileSync('bin/names.txt')
.toString()
.split('\n')
.map(function(name) {
  return {
    name: name,
    id: Math.floor(Math.random() * Math.floor(10000000))
  };
});

const stringifiedData = JSON.stringify(data);

writeFile('bin/data.json', stringifiedData);
