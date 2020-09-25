import { Arguments, Argv } from "yargs";
import { Houses } from "../house/houses";
import { IHouse } from "../house/interface";

export function findSavedHouse(yargs: Argv): void {
    //We are creating a new command to find the houses
    yargs.command(
        //name of the command
        "find-house",

        //decription of the command for the --help flag
        "Find a specific house that you have saved using the name of the house",

        //defining the parameters we need for the command

        {
            name: {
                type: "string",
                alias: "n",
                description: "The name given to the house",
            },
        },

        //defining the function we want to run once the arguments are parsed

        function (
            args: Arguments<{
                name: string;
                width: number;
                length: number;
                unit: string;
            }>
        ) {
            
            //this function takes the houses and finds the house that was searched for =
            function findHouse(house: any) {
                return (house: IHouse) => house.name.includes(args.name);
            }

            const savedHouses = Houses.getAll();
            //...object
            // Spread syntax allows an expression to be expanded in places where multiple
            // arguments (for function calls) or multiple elements (for array literals) are expected.
            const allHouses = [...savedHouses.values()];
        
            //here we find the searched for house, and assign it to a variable.
           let theOne = allHouses.find(findHouse(args.name));
    
            console.log('============Saved House============')
            console.log(theOne);
            console.log('==========TO GET POSTS STUDS AND PLATES PLEASE USE BELOW COMMAND==============');
            console.log('node dist/index.js calc-wood-needed... followed by the --length, --width,--unit, and --name')
            console.log('===========================================================================================');
        }
    );
}
