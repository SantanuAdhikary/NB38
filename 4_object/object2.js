
// ! creating object by using functional constructor

function Employee(ename,eid,sal)
{
  this.ename = ename ; 
  this.eid = eid ; 
  this.sal = sal;
}

let emp1 = new Employee("miller",101,12345);
let emp2 = new Employee("scott",102,23154);
let emp3 = new Employee("blake",103,44204);

console.log(emp1)
console.log(emp2)
console.log(emp3)


// ! creating object by using class


class Student
{
    constructor(sname , sid, age,skills)
    {
      this.sname = sname ; 
      this.sid = sid;
      this.age = age ; 
      this.skills = skills;
    }

    study()
    {
      console.log("student is not studying")
    }

    play()
    {
      console.log("likes to play cricket")
    }
}

let stu1 =  new Student("virat","vk18",10,['sql','java']);
console.log(stu1)
stu1.study()
stu1.play()

let stu2 = new Student("rohit","rs45",12,['html','js']);
console.log(stu2)



// ! we can access by using [] also .

//? syntax :    objectname["keyname"]

let ob = {
  name : "pen",
  price : 10 , 
  color : 'green'
}
console.log(ob.name)
console.log(ob["name"])    // pen
console.log(ob.price)
console.log(ob["price"])  // 10

for(let key in ob)
{
  console.log(key , ob[key])
}