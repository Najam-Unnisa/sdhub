

export const num = 20

function isGreaterThan10(number) {
    if (number > 10) {
        console.log('the number is greater than 10')
    }
    else {
        console.log('the number is less than 10')
    }


}

// isGreaterThan10(20)
// isGreaterThan10(4)
// isGreaterThan10(num)

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log('the number is even')
    }
    else {
        console.log('the number is odd')
    }
}

// isEvenOrOdd(2)
// isEvenOrOdd(5)
// isEvenOrOdd(num)



export function getGrade(grade) {

    if (grade >= 90) {
        console.log('the grade is A')
    }
    else if (grade >= 80 && grade < 90) {
        console.log('the grade is B')
    }
    else if (grade >= 70 && grade < 80) {
        console.log('the grade is C')
    }
    else if (grade >= 60 && grade < 70) {
        console.log('the grade is D')
    }
    else {
        console.log('the grade is F')
    }
}

// getGrade(num)
// getGrade(60)
// getGrade(78)
// getGrade(86)
// getGrade(99)


function isLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(' a is the largest number')
    }
    else if (b > a && b > c) {
        console.log(' b is the largest number')
    }
    else {
        console.log('c is the largest number')
    }
}

// isLargest(num,10,50)
// isLargest(20,50,40)
// isLargest(40,30,24)


// 

function isFruit(expr) {
    switch (expr) {
        case 'Mango':
            console.log('Mango is a summer fruit ');
            break;
        case "Orange":
            console.log('Orange is a tangy fruit ');
            break;
        case "Guava":
            console.log('Guava is my fav fruit ');
            break;
        case "Litchi":
            console.log('litchi is a tropical fruit ');
            break;
        case "Banana":
            console.log('banana is a protien rich fruit ');
            break;
        default:
            console.log('unknown fruit');


    }
}
// isFruit("Litchi")


function printNum(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i)
    }
}

// printNum(20)

// printNum(50)


// printNum(10)

function checkPwdStrenghth(pwd) {

    if (pwd.length < 6) {
        console.log("It is a weak password")
    }else if(pwd.length==6){
        console.log("It is a medium strong password")
    }
    else {
         console.log("It is a strong password")
    }
}

checkPwdStrenghth("sdhadh765")

