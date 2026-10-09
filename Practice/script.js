const person = [
    {name:"Bob", age:22},
    {name:"sam", age:2},
    {name:"hari", age:12},
    {name:"ram", age:45},
]

const asc = [...person].sort((a,b) => a.age - b.age)
const dsc = person.sort((a,b) => b.age - a.age)


console.log(asc);
console.log(dsc);

