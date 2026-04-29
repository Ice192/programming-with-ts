const readline = require("readline-sync");
//Exercise 4 - Restourant Selector
function restourantSelector (vegetarian: boolean, vegan: boolean, gluten: boolean): string{
    if(vegetarian && vegan && gluten){
        return "The Chef's Kitchen & Corner Cafe"
    } else if(!vegetarian && !vegan && !gluten){
        return "Joe's Gourmet Burgers"
    } else if(vegetarian && !vegan && gluten){
        return "Main Street Pizza Kompany"
    } else if(!vegetarian && vegan && gluten){
        return "Mama Fine's Italian"
    } else {
        return 'None'
    }
}
const isVegetarian: string = readline.question("Anyone a vegetarian ")
const isVegan: string = readline.question("Anyone a vegan ")
const isgluten: string = readline.question("Anyone a gluten-free ")
const vegetarian: boolean = (isVegetarian === 'yes') ? true : false
const vegan: boolean = (isVegan === 'yes') ? true : false
const gluten: boolean = (isgluten === 'yes') ? true : false

console.log(restourantSelector(vegetarian,vegan,gluten))