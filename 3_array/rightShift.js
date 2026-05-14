
let a = [10,20,30,40,50]
let n = a.length;
let last = a[n-1]
for(let i=n-2 ; i>=0 ;i--)
{
    a[i+1] = a[i];
}
a[0] = last

console.log(a)