print = console.log
// Q-1 Calculate area of a rectangle
let lengthOfRectangle = 16
let widthOfRectangle = 4
let areaRectangle = lengthOfRectangle * widthOfRectangle
print(`The area of the rectangle is: ${areaRectangle}`)

// Q-2 The Temperature Converter
let celsius = 100
let fahrenheit = 100
let toFahrenheit = (celsius*1.8)+32
let toCelsius = (fahrenheit-32)/1.8
print(`${celsius}°C is ${toFahrenheit}°F`)
print(`${fahrenheit}°F is ${toCelsius}°C`)

// Q-3 Numbers' summations
let Numbers = [23,54,32,87,47]
let sumNumber = 0
Numbers.forEach((Element)=>{
    sumNumber += Element
})
print(`sum of ${Numbers} = ${sumNumber}`)


// Q-4 Maximum number
let nums = [16,4,2,0,19,6] 
let max = 0 
for(let i = 0 ; i<= nums.length; i++){
    if(nums[i] >= max){
        max = nums[i]
    }
}
print(`Maximum number in ${nums} is : ${max}`)

// Q-5 Reverse Array
let nums1 = [1,2,3,4,5,6,7,8,9,10] 
print(`Reverse of ${nums1} is : ${nums1.reverse()}`)

// Q-6 stars pattern
let num = 5
for(let i = 1; i <= num ; i++){
    for(let j = 1; j <= i ; j++){
        process.stdout.write("*")
    }
    print("")
}