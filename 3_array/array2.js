

// ! for loop 

//todo =>  ICU (initialization , condition , updation)

let arr = [10,20,30,40,50]

console.log("------------------for loop------------------")

for(let i=0 ; i<arr.length;i++)
{
    console.log(i, arr[i]);
}

console.log("---------print in reverse order by using for loop---------")

for(let i=arr.length-1; i>=0 ; i--)
{
    console.log(i , arr[i]);
}

// ! for of loop

//? syntax : 

//          for(let variable of arrayname)
//          { 

//          }


console.log("printing value by for of loop ")

for(let ele of arr)
{
    console.log(ele)
}

let players = ["rohit","virat","dhoni","iyer","gambhir","sachin"];

console.log("--------all players name---------------")
for(let player of players)
{
  console.log(player.toUpperCase())
}


console.log("----------for in example---------------")

for(let i in players)
{
    console.log(i , players[i])
}


//  for of loop will get all the elements from the array.
// for in loop it will get all the index from the array.

//  both the loop is used to travese start to end of the array.
// here we don't need initialization,condition and updation.



// !  Higher Order Array Methods 

// ! 1. forEach()

// forEach() is one higher order array method.

// it takes one callback function as a parameter.

// this callback takes 3 parameters (element , index , array)

// it is used to traverse the array 

// forEach() method does not return anything.

let arr2 = [10,20,40,50,80]

arr2.forEach((ele , index, array)=>{

    console.log(index , ele , array)
})  



// ! 2. map()


// map() is one higher order array method , it is used to traverse the array and to perform any operation with all the elements.

// map() can take one callback function as parameter, and in this callback function there are 3 parameters.(element , index , array)

// map() returns one new array.


console.log("-------------------map() method-----------")


arr2.map((ele,index,array)=>{

    console.log(ele,index,array)
})


console.log("-----------------------------------------------")

let prices = [150,350,550,650]

let updatedPrices = []

prices.forEach((ele)=>{

    updatedPrices.push(ele + 50)
})

console.log(updatedPrices)


let m = prices.map((ele)=>{
    return ele + 50
})

console.log(m)

let subjects = ['sql','java','python','html','css','js','css','ad java']


let upper = subjects.map((ele)=>{

    return ele.toUpperCase();
})

console.log(upper)


// ! 3. filter() 

// filter() is one higher order array method used to traverse and check the condition.

// filter() will return one new array. 

// filter() can take one callback function as parameter, and in this callback function there are 3 parameters.(element , index , array)

let marks = [78,45,85,59,67,93]

let goodMarks = marks.filter((ele)=>{
    return ele<=85;
})

console.log(goodMarks)



let sum =1 ;

marks.map((ele)=>{
    sum = sum * ele;
})

console.log(sum)

// ! 4. reduce() 

// reduce() is higher order array method used to convert the array into single value.

// it takes one callback function and inside that it can take 4 parameters.(accumulator , element , index, array)

// default value of accumulator is first element but we can assign the value as per our need.

let totalMarks =  marks.reduce((acc, ele)=>{
                 
                  return acc + ele;
  },0)

  console.log(totalMarks)


//   ! 5. sort()

let heights = [90,40,10,30,15,80]
console.log(heights)

//! how to sort in asscending order 

heights.sort((a,b)=> a - b )
console.log(heights)

//! how to sort in descending order 

heights.sort((a,b)=> b- a)
console.log(heights)



let arr5 = [10,20,30,40,50]

//  get the value greater than 30 => [40,50]
//  add 100 with them             => [140,150]
//  add those values              => 290


let f = arr5.filter((ele)=> ele > 30)

console.log(f)

let m1 =    f.map((ele)=> ele + 100)
console.log(m1)

let r = m1.reduce((acc,ele)=> acc+ele)
console.log(r)


let finalAns = arr5
                .filter((ele)=> ele > 30)
                .map((ele)=> ele + 100)
                .reduce((acc,ele)=> acc + ele)

console.log(finalAns)