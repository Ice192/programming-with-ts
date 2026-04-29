"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
//Exercise 4 - Restourant Selector
function restourantSelector(vegetarian, vegan, gluten) {
    if (vegetarian && vegan && gluten) {
        return "The Chef's Kitchen & Corner Cafe";
    }
    else if (!vegetarian && !vegan && !gluten) {
        return "Joe's Gourmet Burgers";
    }
    else if (vegetarian && !vegan && gluten) {
        return "Main Street Pizza Kompany";
    }
    else if (!vegetarian && vegan && gluten) {
        return "Mama Fine's Italian";
    }
    else {
        return 'None';
    }
}
const isVegetarian = readline.question("Anyone a vegetarian ");
const isVegan = readline.question("Anyone a vegan ");
const isgluten = readline.question("Anyone a gluten-free ");
const vegetarian = (isVegetarian === 'yes') ? true : false;
const vegan = (isVegan === 'yes') ? true : false;
const gluten = (isgluten === 'yes') ? true : false;
console.log(restourantSelector(vegetarian, vegan, gluten));
//# sourceMappingURL=exercise-4.js.map