// console.log("hello from html doc");
// var name = prompt("whats you name again");
// console.log(name)

// var anything =  prompt("Enter a number value");
// var convertedToday = parseInt(anything);

// console.log(typeof anything);
// console.log(typeof convertedToday);

// switch (convertedToday) {
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     default:
//         console.log("you have entered and invalid value")
//         break;
// }

// get the day value from prompt and tell me what day it is 
// enter 4  you should log thursday


// few website which work in chrome firefox and opera
// does'nt work in IE and Edge

var usersBrowser = prompt("what browser are you using");

switch (usersBrowser) {
    case "Edge":
    case "IE":
        console.log(usersBrowser + " This website is not supported")
        break;
    case "Chrome":
    case "Firefox":
    case "Opera":
        console.log(usersBrowser + " This webiste is supported")
        break;
    default:
        console.log("Your browser is not compatible");
        break;
}
