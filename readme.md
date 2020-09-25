# Focus College ACSD Assignment 3

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Geralds Construction Application
This program takes the length and width of a house, and returns the number of 2x4's and 4x4's needed to frame the walls of the house. 


## How to Use this Application
------------------------------
This application has functionality for two commands. You are able to calculate how much wood is needed for a project with the: `calc-wood-needed` command, and you are able to pull up past jobs using their name with the: `find-house` command.

* To use `calc-wood-needed`, you need to pass in four parameters:

    * The Length of the house (preceeded by the `-l` flag)
    *   The Width of the house (preceeded by the `-w` flag)
    * The Unit of measuremant your will be using (preceeded by the `-u` flag)
        * There are two options `-u ft` or `-u in` to choose from
    * The Name of the House you will be getting the information for(preceeded by the `-n` flag)

Example:

```
node dist/index.js calc-wood-needed -l 16 -w 24 -u ft -n Geralds-House
```
* To use `find-house`, you will need to pass in one parameter:
    * The name of the house you are looking for(preceesed by the `-n` flag)

Example:
```
node dist/index.js find-house -n Geralds-House
```


## Developing Instrucions 
-------------------------
Download this application from Github:
```
git clone git@github.com:CBoettcher19590/developing-software-intro-assignment-3.git
```

If already downloaded:
```
git pull origin master
```

To install the dependencies:
```
npm install
```

To build the program:
```
tsc
```
# Scenario

Gerald is enjoying the application we've written for him, but he's running into a few issues:

* He can't see the results of prior houses without knowing the dimensions

* He can only calculate houses that have exact feet in length (i.e. He can calculate an 8 foot x 8 foot house, but not an 8 foot 3 inch x 8 foot 3 inch house).

To tackle these requirements, a Sr. Developer (Steve) and Product Manager (Rosa) have been brought onto the project, and you will be assisting the them. This repo has code changes from the Sr. Developer and user stories from the Product Manager on how to use his new features, plus his list of tasks for you to do.


## Rosas Letter
---

### As Gerald, I need to enter inches into the required measurements on the command line.

---
The current application assumes `--width 8` and `--length 8` are feet, but Gerald would like to be able to set the units. In discussion, we came up with severald ideas that would accomplish the goal:

* Allowing --width 8ft 3in as an entry
* Allowing --width 8'3" as an entry
* Adding a flag to determine the units (i.e. --width 99 --units inches)
* Only one method is required, but decimal values are NOT acceptable. (Gerald doesn't want 8.3 to be confused with 8'3").

### As Gerald, I need to be able to recall prior house builds without knowing their dimensions
---
The current application requires that I put in a width and length to make a calculation. Gerald would like to be able to assign set of parameters to a customer by name, and then recall the results by that same name.

### As Gerald, I need the application to seperate between studs and plates
---
Currently, we return the total number of studs required for the building. Gerald need to know the different between the top/bottom boards (called "plates") and the vertical boards (called "studs"). We also need to calculate two rows of top plates. The bottom plates will still only have one row.

### As Gerald, I need "beams" to be called "posts"
---
We call the extra 4x4's "beams", and they need to be called "posts".


## Steves Letter
---
I need you to create a new epic for this upgrade on the project board, and create the user stories Rosa provided in that epic. Once you've created the stories, add sub-tasks that identify how we're going to accomplish the stories.

After creating your tasks, complete them.

A few additional notes for you:

* Make sure that you update the root readme.md with instructions on how to run the new program.

* Don't change any code in the src/house folder. I haven't finished the tests for it yet and I don't want unexpected outcomes

* Remember to keep your board up to date as you work on the application!

* I've seperated the old calculation into the src/commands folder. Please follow suit if you add any more commands.

## Release Notes
---
### Version 3.0.0
In this version I have added a few features:
* The ability to find houses useing the `find-house` command
    * Find-House does not show posts, plates, or studs, it only finds the house and shows its size. *FIXES TO COME IN PATCH*
* Changed name of beams to posts
* Created units as a parameter to be put
* Created Name as a parameter to be passed in
* Separated plates and studs




### Note to Other Developers
---

I used the [yargs package] for the processing of the command line parameters. For more information on that package, go to the [yargs package] website. 

[yargs package]: https://www.npmjs.com/package/yargs 