const numArr = [52, 273, 586, 32, 57, 103, 312, 2];

// Get the min value and max value. 
// my temptation 
// console.log(munArr.sort((a,b)=>a-b)[0]);
// console.log(munArr.sort((a,b)=>b-a)[0]);

// the answer of teacher
let max = numArr[0];
let min = numArr[0];

for (let index = 1; index < numArr.length; index++) {
    if (max < numArr[index]) max  = numArr[index]; 
    if (min > numArr[index]) min  = numArr[index]; 
}

document.writeln(`Max : ${max}, Min : ${min}`);
document.writeln("<br>");

//` Take a planet name in Korean, and Print out that planet name in English.
const planetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const planetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus"];

const input = prompt("Input a planet name in Kor");
document.writeln("Planet name you input", input);
document.writeln("English planet name",planetEng[planetKor.indexOf(input)] );


// my temptation 
// let input = prompt("행성 이름(한글) 입력 : ");
// let num1 = planetKor.indexOf(input);
// console.log(planetEng[num1]);

// using switch
// switch (input) {
//     case "수성":
//         console.log("Mercury")
//         break;
//     case "금성":
        
//         break;
//     case "지구":
        
//         break;
//     case "화성":
        
//         break;
//     case "목성":
        
//         break;
//     case "토성":
        
//         break;
//     case "천왕성":
        
//         break;

//     default:
//         break;
// }

