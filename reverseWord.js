

let sentence = "javascript is a programming language"

let words = sentence.split(" ")

let ans = ""
for(let word of words)
{
    let rev = ""
    for(let i=word.length-1 ; i>=0 ;i--)
    {
        rev = rev + word.charAt(i)
    }

    ans = ans + rev+" "
}

ans = ans.trim();
console.log(ans)

console.log(sentence.length)
console.log(ans.length)