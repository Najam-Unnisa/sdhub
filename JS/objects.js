
import { getGrade, num } from "./project11.js"

const ob1 = {
    name:"najam",
    age : 8,
    job :"engineer"
}
const ob2 = {
    name1:"najam",
    age1: 8,
    job1 :"engineer"
}

const ob3 ={...ob1,...ob2}
console.log(ob3);


const ob4 =ob1 
ob4.name= "unnisa"
console.log(ob1);

const grade= getGrade(num)
console.log(grade)
