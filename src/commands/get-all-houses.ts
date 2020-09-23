import { Arguments, Argv, choices } from "yargs";
import { House } from "../house";
import { Houses } from "../house/houses";
import fs = require("fs");

export function findSavedHouse(yargs: Argv):void{
    //We are creating a new command to find the houses
    yargs.command(
        //name of the command
        "find-house",

        //decription of the command for the --help flag
        "Find a specific house that you have saved using the name of the house",

        //defining the parameters we need for the command

        {
            name:{
                type: "string",
                alias: "n",
                description: "The name given to the house"
            }
        },

        //defining the function we want to run once the arguments are parsed

        function(
            args: Arguments<{
                name:string;
            }>
        ) {

            const savedHouses = Houses.getAll();
            const houses = [ ...savedHouses.values()];

            console.log("display house --->", houses);

        }

    
    )
}

