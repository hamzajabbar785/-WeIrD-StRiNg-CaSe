// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all 
// even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be 
// upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be 
// present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase = (str) => {
    let strArr;
    if(str.includes(" ")){
        let arr = []
        strArr = str.split(" ")
        for(let el of strArr){
            let newArr = el.split("")
            newArr = newArr.map((letter, i) => i === 0 || i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join("")
            arr.push(newArr)
        }
        return arr.join(" ")
    }else{
        strArr = str.split("")
        return strArr.map((letter, i) => i === 0 || i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join("") 
    }
}

toWeirdCase("String")
toWeirdCase("Weird string case")

//Solution 2

const toWeirdCase = (str) => {
    let newStr = ""
    let counter = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += " "
            counter = 0
        }else if(counter % 2 === 0){
            newStr += str[i].toUpperCase()
            counter++
        }else if(counter % 2 !== 0){
            newStr += str[i].toLowerCase()
            counter++
        }
    }
    
    return newStr
}