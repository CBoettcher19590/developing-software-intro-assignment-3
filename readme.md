# Focus College ACSD Assignment 3

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Geralds Construction Application
This program takes the length and width of a house, and returns the number of 2x4's and 4x4's needed to frame the walls of the house. 


## How to Use this Application
------------------------------
To use this application, you need to pass in two parameters:

* The Length of the house (preceeded by the `-l` flag)
* The Width of the house (preceeded by the `-w` flag)

Example:

```
node dist/index.js calc-lumber -l 16 -w 24
```
The `calc-lumber` command needs to be included for the application to work!

## Developing Instrucions 
-------------------------
Download this application from Github:
```
git clone git@github.com:CBoettcher19590/focuscollege-acsd2020-assignment2.git
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
Gerald has received your email suggesting the rounding change to calculate the number of studs successfully, and was able to use your application. He was very excited that the application worked as he expected, and he has agreed with your math on the stud calculation.

Gerald has an additional problem though. He's been so successful that he's getting bigger and bigger orders and he needs to place additional beams throughout the wall lengths. He would like the application to tell him not only how many 2x4's he needs, but how many 4x4's he needs.

Gerald has also mentioned that he finds it difficult to re-write the application code quickly, so he would like to be able to just give it the dimensions.



## Gerald's Requirements

* Each wall has 2x4’s flat against the floor for the length of the edge of a wall.

* Each wall has vertical 2x4’s spaced 16 inches apart (measured from outside edge of a board to the next outside edge; the board is included in the 16 inches)

* Each wall has 2x4’s flat against the ceiling for the length of the edge of a wall.

* Each 4x4 post has a 2x4 on its side as part of the inner wall.

* Gerald buys 10% MORE than a perfect calculation to account for waste.

* Gerald notes that you can’t purchase a partial piece of lumber, so round up a decimal in the final calculation

* 2x4’s are actually 1.5" x 3.5”

* 4x4’s are actually 3.5” x 3.5”

* Gerald only buys 8’ 2x4’s and 4x4's

* Gerlad is not reusing boards once they're cut, and to avoid waste he always places a beam after a full length board as long as doing so doesn't require that he purchase an extra beam

## Example
-----------

Gerald has given us an example to help us understand his intentions, using a 16' by 24' house:

* Wall 1 is 16 feet
* Wall 2 is 24 feet


### Wall 1 ( 16 feet )

* Wall 1 is under 20 feet, so does not need a post in it.

* 2 boards required for the bottom

* 2 boards required for the top

* 13 vertical boards required in the wall, including the sides

* Total: 17 boards


### Wall 2  ( 24 feet )

* Considering the beams, the 24 foot wall will still have a span greater than 20 feet, so we need a beam in the wall

* If we place the beam exactly at 20 feet, we'll have to cut boards on both sides, so he would put the beam at 16 feet so he only has to cut the boards on the short side.

* A 16 foot wall, on one side of the extra beam, requires 17 boards

* The remaining wall (8 feet minus the width of the extra beam, and both outside beams) requires 8 boards. (Gerald did originally say 10, but remembering your email corrected himself).

* Total: 25 boards, 1 extra beam

### House

* The house required posts on the four corners, regardless of size

    * +4 Beams 

* Wall 1 requries 17 boards

    * +16 Boards 

* Wall 2 requires 25 boards and one extra beam

    * +25 boards, +1 Beam 

* Wall 3 is the same as wall 1

    * +16 Boards 

* Wall 4 is the same as wall 2

    * +25 boards, +1 Beam 

    * Perfect calculation: 82 boards, 6 beams

    * Add 10% for Waste

        * +8.2 boards rounded up to 9, +0.6 beams rounded up to 1 

* Total Boards: 91  ---  Total Beams: 7

OUTPUT IN TERMINAL:
```
The total number of 2x4's needed is: 91
The total number of 4x4's needed is: 7 
```
## Test Log

| House Measurement | 2x4's Required | 4x4's Required      | Last Test Run By
| ----------------- | -------------- | ------------------- | ----------------
| 8 x 8             | 36             | 5                   |  Colby Boettcher
| 16 x 24           | 91             | 7                   |  Colby Boettcher

---



### Note to Other Developers
---

I used the [yargs package] for the processing of the command line parameters. For more information on that package, go to the [yargs package] website. 

[yargs package]: https://www.npmjs.com/package/yargs 