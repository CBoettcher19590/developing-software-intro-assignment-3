import { Arguments, Argv, choices } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";
import { Houses } from '../house/houses'

export function calcWoodNeeded(yargs: Argv): void {
    
    // create a new yargs "command"
    yargs.command(
        
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
                // choices: ["in", "ft"]
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
                // choices: ["in", "ft"]
            },
            unit: {
                type: "string",
                alias: "u",
                description: "The units given, either Inches or Feet",
                choices: ["in", "ft"]
            },
            name: {
                type: "string",
                alias: "n",
                descrioption: "The name that you use to look up a saved house"
            }
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                w: number;
                l: number;
                unit: string 
                u: string;
                name:string;
                n: string;
            }>
        ) {
            
            const requirements = calculateHouseRequirements(
                args.width,
                args.length,
                args.unit,
                args.name
            );

            console.log( requirements );
        
        }
    );
}
