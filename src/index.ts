// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');
import { calcWoodNeeded } from './commands/calc-wood-needed';
import convertInchesToFeet from './wallCalculator'
import { House } from './house';
import { Houses } from './house/houses';

// calcWoodNeeded( yargs );

console.log(convertInchesToFeet(50));

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();