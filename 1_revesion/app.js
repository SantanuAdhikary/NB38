

// let outer =()=>{

//     console.log("i am outer function")
//     let a = 10 ;

//     var inner =()=>{
//         let b = 20;
//         console.log("i am inner function")
//         console.log("a value is ",a)
//         console.log("b value is ",b)
//     }
//     console.log("a value is ",a)
//     console.log("b value is ",b)

//     inner();
// }

// outer();


// let hello =(a)=>{

//     a()
//     console.log("i am hello function");
    
// }

// hello(()=>{
//    console.log("i am callback function") 
// });



// let outer =()=>{
//     let a = 10 ;

//     let inner =()=>{   
//         console.log(a++)
//     }
//     return inner;
// }

// let res = outer()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()
// res()


(
    function(a,b)
    {
        console.log("i am iife")
        console.log(a+b)
    }
)(10,20);


let sname = "bumrah"
console.log(sname)
sname = 56;

console.log(sname)