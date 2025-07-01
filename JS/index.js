let name;
name = "najam";
console.log(name);


var name1 = "najam";


name1 = "najma";
console.log(name1);

const name2 = "najam";
//name2 = "najam";
console.log(name2);

const num1 = null;
console.log(typeof num1);
console.log(typeof name);
console.log(typeof name1);

// Object

const school = {
    name: "Greenwood high",
    location: "hyderabad",
    classes: [
        {
            Classname: "Grade 1", students: [{
                name: "ayesha", age: 6, scores: {
                    maths: 92, english: 88
                }
            },
            {
                name: "rohan", age: 6, scores: {
                    maths: 85, english: 78
                }
            }]
        },
        {

            Classname: "Grade 2", students: [{
                name: "sara", age: 7, scores: {
                    maths: 83, english: 90
                }
            },
            {
                name: "Ali", age: 8, scores: {
                    maths: 76, english: 70
                }
            }]
        }



    ]
}

console.log(school.name);
console.log(school.classes[0].students[0].name);
console.log(school.classes[1].students[1].scores.maths);


const numb1 = parseInt(prompt('num1'))
const numb2 = parseInt(prompt('num2'))


const result= confirm("ok to add and cancel to subtract")

if(result)
{
    alert(const add=num1+num2)
    // alert(numb1+numb2)
}else {
    const sub=num1-num2
    // alert(numb1-numb2)
}

