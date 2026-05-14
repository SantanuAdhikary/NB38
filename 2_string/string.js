

// !  String 

// string is collection of characters, that could be single or multiple.

// string data should be enclosed with '' / " " / ` `

let str1 = 'hello';
let str2 = "hi";
let str3 = `how are you?`;

console.log(str1)
console.log(typeof str1)

console.log(str2)
console.log(typeof str2)

console.log(str3)
console.log(typeof str3)

// ! string interpolation / template literals 

// when we want to access any variable inside string the string should be enclosed with ` `, and the varialbe should be written inside ${}. 

let a = 10 ; 
let b = 20 ; 
let sum = a + b ;

console.log(`the addition of ${a} and ${b} is ${sum}`)
console.log(`the subtraction of ${b} and ${a} is ${b-a} `)



// !  length

   // length property is used to know the size of the string.

   console.log(str1.length)
   console.log(str2.length)
   console.log(`the length of str3 is ${str3.length}`)


// ! String methods.



// ! 1. toLowerCase()

// this method is used to convert the string into lowercase and it will return one new string.

// original string it will not modify.

let greet = "Good AfterNoon"

let lower = greet.toLowerCase()
console.log(lower)
console.log(greet)


// ! 2. toUpperCase()

// this method is used to convert the string into upper case and it will return one new string.

// original string it will not modify.

let upper = greet.toUpperCase();
console.log(upper)
console.log(greet)

// ! 3. charAt()

// this method is used to know at the given index which character is present. 

// it will take one parater (index).

let msg = "Vijay became cm"

console.log(msg.charAt(10))  // m
console.log(msg.charAt(0))  // V
console.log(msg.charAt(3))  // a


// ! Check Palindrome 

let str = "madam";
let rev = "";

for(let i=str.length-1 ; i>=0 ; i--)
{
    rev += str.charAt(i);
}
console.log(rev)
if(str == rev)
    console.log("it is palindrome")
else
    console.log("it is not palindrome")



// ! 4. indexOf()

// indexOf method is used to know the index of the given character. 

// if the given character is present more than one time, then it will give the first occurance.

// if the character is not present then this method will return -1.

let lang = "malayalam"
console.log(lang.indexOf("a"))    // 1
console.log(lang.indexOf("x"))   // -1



// ! 5. lastIndexOf()

// lastIndexOf method is used to know the last occurance index of the given character. 

// if the character is not present then this method will return -1.

console.log(lang.lastIndexOf("a"))   // 7
console.log(lang.lastIndexOf("x"))   // -1

// ! Find single element 

for(let i=0 ; i<lang.length ; i++)
{
    let ch = lang.charAt(i)

    if(lang.indexOf(ch) == lang.lastIndexOf(ch))
    {
        console.log(ch)
        break;
    }
}



// !  6. trim()

// trim() method is used to remove white spaces from both the sides of the string and it will return one new string.

let input = "  java  "
console.log(input)
console.log(input.length)

let afterTrim = input.trim();
console.log(afterTrim)
console.log(afterTrim.length)


// ! 7. includes()

// includes() method is used to know given stiring is present or not.
// it will return boolean.

let str4 = "welcome to webtech class"

console.log(str4.includes("welcome"))  // true
console.log(str4.includes("Welcome")) // false



// !  8. replace()

// replace() method is used to replace one string with another string.

// it will replace only the first occurance.

// it will not modify the original string, it will return one new string. 

//? syntax:     variable.replace("existing string","replaced string");

let sentence = "I am from Bangalore, I love Bangalore"

console.log(sentence.replace("Bangalore","Chennai"));

console.log(sentence)


// ! 9. replaceAll()

// replaceAll() method will replace all the matched string with the given string.

let word = "malayalam"

console.log(word.replaceAll("a","@"))


// ! 10. concat()

// concat() method is used to merge two or more than two strings and it returns one new string.

let firstName = "rohit"
let lastName = "sharma"

console.log(firstName.concat(" ",lastName,"."))  // rohit sharma.

// ! write a program to find count how many vowels are present in given string 

let sname = "SANtanu Adhikary"
let sname1 = sname.toLowerCase();
let count = 0 ;

for(let i=0 ; i<sname1.length;i++)
{
    let ch = sname1.charAt(i);

    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            count++;
}
console.log(`total vowels : ${count}`)


// ! 11. slice() 

// slice() method is used to extract some part of another string.
// it takes two parameteres (startIndex , endIndex)
// it does not include endIndex value.
// if we provide only startIndex, from that it will print all the remaining string.
// in slice() startIndex and endIndex should move from left to right not right to left
// we can give negative value also in slice()

let sub = "javascript"

console.log(sub.slice(0,4))   // java
console.log(sub.slice(4))    // script
console.log(sub.slice(4,0))  // no output
console.log(sub.slice(-6))  // script
console.log(sub.slice(0,-1)); // javascrip



// ! 12. substring()

//  substring() method is used to extract some part of any string.
// it takes two parameters (startIndex,endIndex) and it does not include endIndex value.

// it can not take negative index.if we provide any negative Index it will be assumed as 0. 

// here we can provide endIndex and startIndex from right to left, it will swap these index value.

console.log("substring example")

console.log(sub.substring(0,4));      // java
console.log(sub.substring(4));       // script
console.log(sub.substring(4,0))     // java
console.log(sub.substring(-6))     //javascript



// !   13. split()

// split() method is used to convert any string into array based on the character sent in parameter.

let msg2 = "welcome to javascript session"

console.log(msg2.split(" ")); // ['welcome', 'to', 'javascript', 'session']
console.log(msg2.split(""));  // ['w','e','l'........... 'n']
console.log(msg2.split());   // ['welcome to javascript session']


// !  14. charCodeAt()

// it is used to know the ASCII value of any given character.

console.log(msg2.charCodeAt(14))   // 97
console.log(msg2.charAt(14))      // a


// !  remove special character 


let name = "Sa@nta#nu!"

// output =>Santanu

let res = ""

for(let i=0 ; i<name.length ; i++)
{
    let ch = name.charAt(i);

    if(ch >='a' && ch<='z' || ch>='A' && ch<='Z' || ch>='0' && ch<='9')
        res = res + ch
}


console.log(res)


