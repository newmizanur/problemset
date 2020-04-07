const RandStream = require('./lib/lib').RandStream;
const RandStringSource = require('./src/RandStringSource');
const ResourceManager = require('./src/ResourceManager');
const doAsync = require('./src/AsyncOperation');

// based on: NodeJS 6(es6)

//problem 1
let input = [
    'A',
    ['B', 'C', 'D', 'E'],
    'F',
    'G',
    ['H', 'I'],
    'K'
];
doAsync(input);


//problem 2
// const stringSource = new RandStringSource(new RandStream());
// stringSource.on('data', (chunk) => {
//     console.log(`${chunk}`)
// });


//problem 3
// let resourceManager = new ResourceManager(2);
// console.log('START');
// let timestamp = Date.now();
// resourceManager.borrow((res) => {
//   console.log('RES: 1');
//   setTimeout(() => {
//     res.release();
//   }, 500);
// });
// resourceManager.borrow((res) => {
//   console.log('RES: 2');
// });
//
// resourceManager.borrow((res) => {
//   console.log('RES: 3');
//   console.log('DURATION: ' + (Date.now() - timestamp));
// });