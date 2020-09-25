import { Arguments, Argv } from "yargs";
import { Houses } from "../house/houses";
import yargs = require("yargs");
import { IHouse } from "../house/interface";

//this function is for finding a specific House
//*Idea*It checks to see if its name matches the name of the argument(when its called)
// function checkCalledHouse(name: any) {
//     if (name.name === name.name) {
//         return name;
//     }
// }
// const houseToFind = yargs.name;
// console.log(houseToFind);

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
            }>
        ) {
            function findHouse(house: any) {
                return (house: IHouse) => house.name.includes(args.name);
            }

            const savedHouses = Houses.getAll();
            //...object
            // Spread syntax allows an expression to be expanded in places where multiple
            // arguments (for function calls) or multiple elements (for array literals) are expected.
            const allHouses = [...savedHouses.values()];
            const theOne = allHouses.find(findHouse(args.name));

            console.log(theOne);
        }
    );
}
