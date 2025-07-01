const str = "My name is najam"
console.log(str)





// let num1 = 5
// console.log(num1 * Math.random())

     

// const otp =Math.round( Math.random() * 100000))

// const otp1 = otp.toString()

// console.log(otp1)
// console.log(Math.ceil(otp1)) 
// console.log(otp1.length)



function otpGen(length){
const digits='0123456789'
let otp='';

for(let i=0; i<length; i++){
    const randomIndex =Math.floor( Math.random() * digits.length)
    otp = otp + digits[randomIndex]
}
return otp
}

const fiveDigitOtp = otpGen(5)
console.log(fiveDigitOtp)



function pwdGen(length){
const num='0123456789'
const caps = 'ABCDE'
const small = 'abcde'
const symbols = '!@#$%^&*'
let pwd='';

for(let i=0; i<length; i++){
    const randomIndex =Math.floor( Math.random() * num.length )
    pwd = pwd + num[randomIndex] 
}
return pwd
}

const eightDigitOtp = pwdGen(8)
console.log(eightDigitOtp) 