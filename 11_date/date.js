


let now  = new Date();
console.log(now)

// ! 1. getHours()
  
// used to know the hour. it will give in 24hr format

console.log("hour is : ", now.getHours())

// ! 2. getMinutes()

console.log("minutes is : ",now.getMinutes())

// ! 3. getSeconds()

console.log("second is : ",now.getSeconds())

// ! 4. getMilliseconds()

console.log("milisecond is : ",now.getMilliseconds())


// ! 5. getFullYear()

console.log("year is : ",now.getFullYear())

// ! 6. getDate()

console.log("today date : ",now.getDate())


// ! 7. getMonth()

// it will return number, there january =0 , feb = 1 ...... dec =11

console.log("month is : ",now.getMonth())  

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let monthIndex = now.getMonth();
console.log("month name is : ",months[monthIndex])

// ! 8. getDay()

// it will return number. sunday=0, monday=1 .... , saturday = 6 

console.log("today is ",now.getDay())

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("today day name is : ",days[now.getDay()])


// ! 9. toLocaleTimeString()  

console.log(now.toLocaleTimeString())    // 3:09:02 PM

// ! 10. toLocaleDateString()

console.log(now.toLocaleDateString())



// ! reverse number 

let num = 123 ; 
let rev = 0 ;
while(num > 0 )
{
    let ld = num % 10 ; 
    rev = rev * 10 + ld ; 
    num = Math.floor( num / 10) ;
}

console.log("reverse number is : ",rev)


// ! Math Object methods 


// ! 1. Math.sqrt() 

console.log(Math.sqrt(4))      // 2
console.log(Math.sqrt(25))    // 5

// ! 2. Math.min()

console.log(Math.min(50,100,400,20,90,1))

// ! 3. Math.max()

console.log(Math.max(50,100,400,20,90,1))

// ! 4. Math.ceil()

console.log(Math.ceil(5.7))          // 6
console.log(Math.ceil(5.00000001))  // 6


// ! 5. Math.floor()

console.log(Math.floor(5.3))           // 5
console.log(Math.floor(5.999999999))  // 5

// ! 6. Math.round()

console.log(Math.round(7.3))    // 7
console.log(Math.round(7.6))   // 8
console.log(Math.round(7.5))  // 8



// ! find the large digit 

let num2 = 5294613
let large = -Infinity;

while(num2>0)
{
    let ld = num2 % 10  ; 
    large = Math.max(large,ld);
    num2 = Math.floor( num2 / 10) ;
}
console.log("large digit is : ",large)